// components/table/index.js
import {
  IndexModels
} from '../../models/index.js'
let indexModels = new IndexModels();
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
    news:[]
  },

  lifetimes: {
    attached: function() {
      var that = this;
      indexModels.newsList((res)=>{
        var news = res.data.list
        that.setData({
          news: news
        })
      })

    }
  },


  /**
   * 组件的方法列表
   */
  methods: {

  }
})