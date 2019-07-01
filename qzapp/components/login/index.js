// components/login/index.js
import {
  LoginModels
} from '../../models/login.js'
let loginModels = new LoginModels()
let code = ''
let loginInterval = null
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //登录界面
    loginWindow: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //账号登录界面
    accountWindow: false,
    //闪图
    flashWindow: true,
    //获取验证码倒计时
    times: 0,
    phone: '',
    password: '',
    showCancel: true,
    content: '您考虑绑定的手机号已存在，是否绑定当前账号？',
    modalWindow: false,
    serverPhone: ''
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  lifetimes: {
    attached: function() {
      //判断用户
      loginModels.getLoginCode((res) => {
        const user = res.data.object;
        if (user.bang_status != 1) { //新用户
          this.setData({
            flashWindow: false
          })
        }
      });
    },
    ready: function() {

    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getPhoneNumber(e) {
      if (e.detail.errMsg == "getPhoneNumber:ok")
        var that = this;
      let user = wx.getStorageSync('user');
      loginModels.analysisPhoneNumber({
        iv: e.detail.iv,
        encryptedData: e.detail.encryptedData,
        sessionKey: user.session_key
      }, res => {
        const phone = res.data.object
        user.phoneNumber = phone.phoneNumber
        wx.setStorageSync('user', user)

        if (phone.phoneStatus == 0) { //判断账号是否存在
          // 调用绑定账号接口
          const jsonData = {
            openid: user.openid,
            account_url: '',
            account_name: '',
            account_phone: user.phoneNumber
          }
          loginModels.bindAccount(jsonData, (res) => {
            that.setData({
              loginWindow: false,
              modalWindow: false
            })
          })
        } else if (phone.phoneStatus == 1) {
          //自定义弹框
          that.setData({
            modalWindow: true,
            showCancel: true
          })
        } else {
          that.setData({
            content: '您所使用的手机号已绑定其他账号,请联系客服或者重新绑定!',
            modalWindow: true,
            showCancel: false,
            serverPhone: res.msg
          })
        }
      })
    },

    /**
     * 去注册
     */
    cancel() {
      var that = this;
      that.setData({
        accountWindow: true,
        modalWindow: false
      })
    },

    /**
     * 手机绑定微信
     */
    confirm(e) {
      var that = this;
      const showCancel = that.data.showCancel;
      if (showCancel == true) {
        let user = wx.getStorageSync('user');
        const userInfo = e.detail.userInfo;
        const jsonData = {
          openid: user.openid,
          account_url: userInfo.avatarUrl,
          account_name: userInfo.nickName,
          account_phone: user.phoneNumber
        }
        loginModels.bindAccount(jsonData, (res) => {
          that.setData({
            loginWindow: false,
            modalWindow: false
          })
        })
      } else {
        const serverPhone = that.data.serverPhone;
        that.setData({
          modalWindow: false
        })
        wx.makePhoneCall({
          phoneNumber: serverPhone
        })
      }

    },

    /**
     * 账号登录页
     * 开启/关闭 
     */
    switchAccount() {
      var that = this;
      that.setData({
        accountWindow: !that.data.accountWindow
      })
    },

    /**
     * 判断手机号
     */
    judgePhone(e) {
      var that = this;
      const phone = e.detail.value;
      loginModels.judgePhone(phone, (res) => {
        that.setData({
          phone: phone
        })
      })
    },

    /**
     * 判断密码
     */
    judgePassword(e) {
      let password = e.detail.value;
      loginModels.judgePassword(password, (res) => {
        that.setData({
          password: password
        })
      })
    },

    /**
     * 获取验证码
     */
    getPhoneCode() {
      var that = this;
      const phone = that.data.phone;
      loginModels.judgePhone(phone, (res) => {
        const jsonData = {
          phone: phone
        }
        loginModels.sendSms(jsonData, (res) => {
          that.timeOut(59);
          that.setData({
            code: res.data.object.sms_code
          })
        })
      })
    },

    /**
     * 倒计时
     */
    timeOut(times) {
      var that = this;
      loginInterval = setInterval(function() {
        times--
        if (times == 0) {
          clearInterval(loginInterval)
        }
        that.setData({
          times: times
        })
      }, 1000)
    },

    /**
     * 账号登录
     */
    loginAccount(e) {
      var that = this;
      if (loginInterval) {
        clearInterval(loginInterval)
        const phone = that.data.phone;
        const password = that.data.password;
        const code = that.data.code;
        loginModels.judgePhone(phone, (res) => {
          loginModels.judgePassword(password, (res) => {
            if (code.length != 0) {
              const userInfo = e.detail.userInfo;
              let user = wx.getStorageSync('user');
              const jsonData = {
                openid: user.openid,
                account_url: userInfo.avatarUrl,
                account_name: userInfo.nickName,
                account_phone: phone,
                account_password: password,
                code: code
              }

            }
          })
        })
      }
    },
  }
})