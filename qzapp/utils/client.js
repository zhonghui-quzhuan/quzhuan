const config = require('./config.js');

const contentType = {
  1: "application/json",
  2: "application/x-www-form-urlencoded"
}

class HTTP {
  requset(params) {
    //url ,data, method
    if (!params.method) {
      params.method = "POST"
    }
    if (!params.header) {
      params.header = 1
    }
    const jsonData = JSON.stringify(params.data)
    
    wx.request({
      url: config.serverUrl + params.url,
      method: params.method,
      data: {
        jsonData: jsonData
      },
      header: {
        "content-type": contentType[params.header]
      },
      success: (res) => {
        let code = res.statusCode.toString();
        console.log(res.data.msg)
        if (code.startsWith('2')) {
          params.success(res.data)
        } else {
          let error_code = res.data.msg;
          console.log(error_code)
          this._show_error(error_code)
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '网络错误',
          icon: 'none',
          duration: 2000
        })
      }
    })
  }

  _show_error(error_code) {
    wx.showToast({
      title: error_code,
      icon: 'none',
      duration: 2000
    })
  }
}

export {
  HTTP
}