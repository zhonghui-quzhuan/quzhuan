// components/switch/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nav:{
      type: Array,
      value: []
    }
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
    switchNav(e) {
      var that = this;
      const i = e.currentTarget.id;
      let nav = that.data.nav;
      for (let o in nav) {
        if (o != i) {
          nav[o].selected = '';
        } else {
          nav[o].selected = 'selected';
        }
      }
      that.triggerEvent('switchNav', nav)
    }
  }
})