// components/ad/index.js
var setCountDown = null;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    adWindow: {
      type: Boolean,
      value: false      
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    countDown: 8,
    modalWindow: true,
    tipWindow: false,
    showCancel: false,
    content: '这里有2张优惠券，是这张金的还是这张银的'
  },

  lifetimes: {
    attached: function() {

    }
  },

  observers: {
    'adWindow': function (adWindow){
      var that = this;
      let countDown = that.data.countDown;
      if (this.properties.adWindow == true)
      setCountDown = setInterval(function () {
        countDown--
        console.log(countDown)
        if (countDown == 0) {
          clearInterval(setCountDown)
          that.setData({
            adWindow: false,
            tipWindow: true
          })
        }
        that.setData({
          countDown: countDown
        })
      }, 1000)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 关闭广告
     */
    closeAd(countDown) {
      var that = this;
      clearInterval(setCountDown)
      that.setData({
        adWindow: false,
        countDown: 8
      })
    },

    confirm(e) {
      var that = this;
      wx.showToast({
        title: '领取成功',
        icon: 'none',
        duration: 2000
      })
      that.setData({
        tipWindow: false,
        countDown: 8
      })
    }
  }
})