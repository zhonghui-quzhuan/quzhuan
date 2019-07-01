// components/nav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //导航标题
    title: {
      type: String,
      value: ""
    },
    //导航类型 定位 or 返回
    locationWindow: {
      type: Boolean,
      value: true
    },
    /**
     * 返回类型
     * @locationWindow 为false有效
     * 跳转 or 关闭事件
     */
    backStatus: {
      type: Boolean,
      value: true
    },
    //导航跳转类型
    openType: {
      type: Number,
      value: 4
    },
    //导航跳转页面
    url: {
      type: String,
      value: ''
    }
  },

  // 私有数据，可用于模板渲染
  data: {
    locationName: '深圳',
    statusHeight: wx.getSystemInfoSync().statusBarHeight,
    navigateList: [
      'navigate', //保留当前页面，跳转到应用内的某个页面
      'redirect', //关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
      'switchTab', //跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
      'reLaunch	', //关闭所有页面，打开到应用内的某个页面
      'navigateBack', //关闭当前页面，返回上一页面或多级页面
      'exit' //退出小程序，target="miniProgram"时生效
    ]
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  lifetimes: {
    attached: function() {

    },
    ready: function() {

    }
  },

  pageLifetimes: {

  },

  methods: {
    /**
     * 关闭搜索
     */
    back() {
      var that = this;
      that.triggerEvent('back', {});
    }
  }
})