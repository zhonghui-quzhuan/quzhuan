// components/banner/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    banner:{
      type: Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    circular: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
