// components/flash/index.js
import {
  LoginModels
} from '../../models/login.js'
let loginModels = new LoginModels()

var skipInterval = null;
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    num: 3,
    isLogin: false,
    statusHeight: wx.getSystemInfoSync().statusBarHeight
  },

  lifetimes: {
    attached: function() {
      //判断用户
      loginModels.getLoginCode((res) => {
        const user = res.data.object;
        console.log(user,'用户判断')
        if (user.bang_status == 1) { //老用户          
          this.autoSkip();
        }
      });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    autoSkip() {
      var that = this
      let num = 3
      skipInterval = setInterval(function() {
        num--
        that.setData({
          num: num,
          isLogin: true
        })
        if (num == 0) {
          that.skip()
        }
      }, 1000)
    },

    /**
     * 跳过
     */
    skip() {
      let isLogin = this.data.isLogin;
      if (isLogin)
        wx.switchTab({
          url: '../index/index',
          success() {
            clearInterval(skipInterval)
          }
        })
    }
  }
})