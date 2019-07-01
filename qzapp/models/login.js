import {
  HTTP
} from "../utils/client.js"

class LoginModels extends HTTP {
  //获取微信小程序code码
  getLoginCode(sCallback) {
    wx.login({
      success: r => {
        // 发送 res.code 到后台
        if (r.code) {
          this.setLoginCode({
            code: r.code
          }, res => {
            sCallback(res)
            wx.setStorageSync('user', res.data.object)
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
  }

  //向服务器换取 openId, sessionKey, unionId
  setLoginCode(code, sCallback) {
    this.requset({
      url: '/index/Wxlogin/getOpenid',
      data: code,
      header: 2,
      success: (res) => {
        sCallback(res)
      }
    })
  }

  /**
   * 解析电话
   * iv=>加密算法的初始向量
   * encryptedData=>完整用户信息的加密数据
   */
  analysisPhoneNumber(jsonData, sCallback) {
    this.requset({
      url: '/index/Wxlogin/getPhoneNumber',
      data: jsonData,
      header: 2,
      success: (res) => {
        sCallback(res)
      }
    })
  }

  /**
   * 绑定手机号
   */
  bindAccount(jsonData, sCallback) {
    this.requset({
      url: '/index/Wxlogin/authorLogin',
      data: jsonData,
      header: 2,
      success: (res) => {
        console.log(res,'绑定手机号')
        let user = wx.getStorageSync('user');
        user.token = res.data.object.token;
        wx.setStorageSync('user', user);
        sCallback(res)
        wx.switchTab({
          url: '../index/index'
        })
      }
    })
  }

  /**
   * 手机号码判断
   * 正则表达式
   */
  judgePhone(phone, sCallBack) {
    if (phone.length < 11 || !(/^1[3456789]\d{9}$/.test(phone))) {
      wx.showToast({
        title: '手机号码格式有误',
        duration: 1300,
        icon: 'none'
      });
      return false;
    } else {
      sCallBack(phone)
    }
  }

  /**
   * 密码判断
   * 暂时判断不得为空 或 不得低于8位数
   */
  judgePassword(password) {
    if (password.length == 0) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none',
        duration: 1300
      })
      return false;
    } else if (password.length < 8) {
      wx.showToast({
        title: '密码过短',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
  }

  /**
   * 手机验证码
   */
  sendSms(jsonData, sCallback) {
    this.requset({
      url: '/index/Account/SendSms',
      data: jsonData,
      header: 2,
      success: (res) => {
        wx.showToast({
          title: '发送成功',
          icon: 'none',
          duration: 1200
        })
        sCallback(res)
      }
    })
  }
}

export {
  LoginModels
}