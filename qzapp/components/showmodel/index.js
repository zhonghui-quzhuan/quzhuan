// components/showmodel/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    modalWindow: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: '提示'
    },
    content: {
      type: String,
      value: ''
    },
    showCancel: {
      type: Boolean,
      value: true
    },
    cancelColor: {
      type: String,
      value: '#000'
    },
    cancelBackground: {
      type: String,
      value: '#fff'
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    cancelType: {
      type: Boolean,
      value: true
    },
    confirmColor: {
      type: String,
      value: '#576B95'
    },
    confirmBackground: {
      type: String,
      value: '#fff'
    },
    confirmText: {
      type: String,
      value: '确定'
    },
    confirmType: {
      type: Boolean,
      value: true
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetime: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cancel(e) {
      var that = this;
      that.triggerEvent('cancel', e.detail);
    },
    confirm(e) {
      var that = this;
      that.triggerEvent('confirm', e.detail);
    }
  }
})