// pages/detail/detail.js

let payStatus = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '商品详情',
    locationWindow: true,
    banner: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    status: false,
    buyNumber: 1,
    adWindow: false,
    patternWindow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  removeDetail() {
    wx.switchTab({
      url: '../shop/shop'
    })
  },

  /**
   * 收藏
   */
  collect() {
    var that = this;
    const status = !that.data.status;
    that.setData({
      status: status
    })
  },

  /**
   * 看广告
   */
  switchAd() {
    var that = this;
    that.setData({
      adWindow: true
    })
  },

  /**
   * 关闭选项卡
   */
  closePattern() {
    var that = this;
    that.setData({
      patternWindow: false
    })
  },

  /**
   * 修改数量
   * 包含点击、输入
   */
  saveNumber(e) {
    var that = this;
    let buyNumber = e.detail;
    that.setData({
      buyNumber: buyNumber
    })
  },

  /**
   * 购买商品
   * 1 加入购物车 / 2 立即购买
   */
  buyProudct(e) {
    var that = this;
    payStatus = e.detail
    that.setData({
      patternWindow: true
    })
  },

  /**
   * 确定购买
   */
  confirm() {
    var that = this;
    that.setData({
      patternWindow: false
    })
  }
})