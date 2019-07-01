// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backStatus: true,
    newsId: 0,
    newsWindow: false,
    nav: [{
      title: '吃喝',
      selected: 'selected'
    }, {
      title: '住宿',
      selected: ''
    }, {
      title: '娱乐',
      selected: ''
    }, {
      title: '生活',
      selected: ''
    }, {
      title: '景点',
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
   * 切换头条类型
   */
  switchNav(e) {
    var that = this
    console.log(1)
    const nav = e.detail
    that.setData({
      nav: nav
    })
  },

  /**
   * 切换公告内容
   */
  switchNews(e) {
    var that = this
    let newsWindow = !that.data.newsWindow
    let backStatus = !that.data.backStatus
    that.setData({
      noticeId: e.detail,
      backStatus: backStatus,
      newsWindow: newsWindow
    })
  }
})