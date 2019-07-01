// components/shop/index.js
var app = getApp();

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
    couponBg: app.config.imgUrl + 'coupon_1.png',
    vip: app.config.imgUrl + 'vip_1.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 看地图
     */
    lookMaps() {
      wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success(res) {
          const latitude = res.latitude
          const longitude = res.longitude
          wx.openLocation({
            latitude,
            longitude,
            scale: 18
          })
        }
      })
    },

    /**
     * 打电话
     */
    callPhone() {
      wx.makePhoneCall({
        phoneNumber: '1340000' //仅为示例，并非真实的电话号码
      })
    }
  }
})