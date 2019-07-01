// components/earn/index.js

let countDown = null
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
    times: 8,
    rewardWindow: false,
    statusHeight: wx.getSystemInfoSync().statusBarHeight
  },

  lifetimes: {
    attached: function() {
      var that = this;
      let times = that.data.times;
      countDown = setInterval(function() {
        times--;
        if (times == 0) {
          clearInterval(countDown)
        }
        that.setData({
          times: times,
          rewardWindow: times == 0 ? true : false
        })
      }, 1000)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    closeRewardWindow() {
      this.setData({
        rewardWindow: false
      })
    }
  }
})