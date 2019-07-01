// component/navbar/index.js 
Component({


  // 属性定义
  properties: {
    title: {
      type: String,
      value: ""
    },
    locationWindow: {
      type: Boolean,
      value: true
    },
    locationName: {
      type: String,
      value: ""
    }
  },

  // 私有数据，可用于模板渲染
  data: {
    statusHeight: wx.getSystemInfoSync().statusBarHeight,
    windowType: false
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
    switchLocation: function() {
      var that = this;
      that.triggerEvent('switchLocation', {})
    }
  }

})