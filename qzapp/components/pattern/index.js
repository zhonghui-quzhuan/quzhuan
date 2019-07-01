// components/pattern/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    buyNumber: {
      type: Number,
      value: 1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    windowHeight: wx.getSystemInfoSync().windowHeight

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 关闭窗口
     */
    closePattern() {
      this.triggerEvent('closePattern', {})
    },
    
    /**
     * 修改数量
     * 包含点击、输入
     */
    saveNumber(e) {
      var that = this;
      let buyNumber = e.detail;
      that.triggerEvent('saveNumber', buyNumber)
    },

    /**
     * 确定购买
     */
    confirm() {
      var that = this;
      that.triggerEvent('confirm', {})
    }
  }
})