// components/news-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nav: {
      type: Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    content: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchNav(e) {
      var that = this;
      console.log(1)
      that.triggerEvent('switchNav', e.detail)
    },
    switchNews(e) {
      this.triggerEvent('switchNews', e.currentTarget.id)
    }
  }
})