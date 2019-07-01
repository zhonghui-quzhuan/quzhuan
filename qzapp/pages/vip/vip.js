// pages/vip/vip.js
var app = getApp()
var startX, startY
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vipWindow: false,
    statusHeight: `${wx.getSystemInfoSync().statusBarHeight + 46}px`,
    vipCard: `${app.config.imgUrl}vip_3.png`,
    scrollY: false,
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

  touchStart(e) {
    //开始触摸时 重置所有删除
    let scrollY = this.data.scrollY;
    if (!scrollY) //只操作不为true的
      startX = e.changedTouches[0].clientX
      startY = e.changedTouches[0].clientY

  },

  touchMove(e) {
    let scrollY = this.data.scrollY;
    var index = e.currentTarget.dataset.index, //当前索引
      touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
      //获取滑动角度
      angle = this._angle({
        X: startX,
        Y: startY
      }, {
        X: touchMoveX,
        Y: touchMoveY
      });
    if (Math.abs(angle) < 30) return;
    if (touchMoveY < startY) {
      //上滑
      console.log('上滑')
      this.setData({
        scrollY: true
      })
    } else {
      //下滑
      console.log('下滑')
    }
  },

  _angle(start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  }
})