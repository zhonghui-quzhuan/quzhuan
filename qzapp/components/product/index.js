// components/product/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    status: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    windowHeight: wx.getSystemInfoSync().windowHeight
  },

  attached: function() {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectProduct(e){
      console.log(e)
    }
  }
})