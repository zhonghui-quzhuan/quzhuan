// pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusHeight: wx.getSystemInfoSync().statusBarHeight,
    nav: [
      '宝贝商品', '经典内容'
    ],
    selected: 0,
    status: false
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
   * 切换标题
   */
  switchNav(e) {
    var that = this;
    that.setData({
      selected: e.currentTarget.id
    })
  },

  /**
   * 切换编辑
   */
  editProduct(){
    var that = this;
    let status = !that.data.status;
    that.setData({
      status: status
    })
  }
})