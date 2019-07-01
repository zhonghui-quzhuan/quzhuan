//index.js
//获取应用实例

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '发现',
    locationWindow: false,
    locationName: '深圳',
    hotspot: {
      title: '主题Banner',
      intro: '24小时内精选商品\n或今日热点',
      image: '../../image/banner.png'
    },
    poster: [{
        id: 1,
        image: '../../image/product.png'
      },
      {
        id: 2,
        image: '../../image/product.png'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    const jsonData = {
      cityName: ""
    }
  },

  switchLocation(e){
    var that = this;
    let location = !that.data.location;
    that.setData({
      location: location
    })
  }
})