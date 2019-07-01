// pages/discount/discount.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productId: 0,
    backStatus: false,
    searchWindow: false
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

  /**
   * 打开搜索页
   */
  openSearch() {
    var that = this;
    let searchWindow = that.data.searchWindow;
    if (!searchWindow) { //阻止过多无意义渲染
      that.setData({
        searchWindow: true
      })
    }
  },

  /**
   * 关闭搜索页
   */
  closeSearch() {
    var that = this;
    that.setData({
      productId: 0,
      searchWindow: false
    })
  },

  /**
   * 打开商品
   */
  openProduct(e) {
    var that = this
    let productId = e.detail
    that.setData({
      productId: productId
    })
  }
})