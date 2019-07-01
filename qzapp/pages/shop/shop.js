// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '悦商城',
    searchWindow: false,//搜索
    productWindow: false,
    backStatus: false,
    statusHeight: wx.getSystemInfoSync().statusBarHeight + 46,
    placeholder: '搜索品牌、商品',
    nav: [{
      title: '自营精选',
      selected: ''
    }, {
      title: '健康代餐',
      selected: ''
    }, {
      title: '健康茶饮',
      selected: ''
    }, {
      title: '养身推荐',
      selected: ''
    }, {
      title: '日用百货',
      selected: ''
    }]
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
    if (!searchWindow) {//阻止过多无意义渲染
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
    let searchWindow = that.data.searchWindow;
    let productWindow = that.data.productWindow;
    if (productWindow) {
      let nav = that.data.nav;
      for (let i in nav) {
        nav[i].selected = '';
      }
      that.setData({
        nav: nav,
        productWindow: false
      })
    }else{
      that.setData({
        searchWindow: false
      })
    }
  },

  /**
   * 切换二级导航
   */
  switchNav(e) {
    var that = this
    const nav = e.detail    
    that.setData({
      nav: nav,
      productWindow: true
    })
  }
})