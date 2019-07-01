// components/discount/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    openProduct(e){
      var that =this;
      let id = e.currentTarget.id;
      that.triggerEvent('openProduct', id)
    }
  }
})
