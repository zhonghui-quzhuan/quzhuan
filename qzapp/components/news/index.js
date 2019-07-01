// components/news/index.js
var WxParse = require('../../utils/wxParse/wxParse.js')

import {
  NewsModels
} from '../../models/news.js'
let newsModels = new NewsModels()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    newsId: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetimes: {
    attached: function() {
      var that = this;
      let jsonData = {
        notice_id: this.properties.newsId
      }
      newsModels.getMyNews(jsonData, (res) => {
        var article = res.data.object;
        that.setData(article)
        WxParse.wxParse('content', 'html', article.notice_content, that, 5);
      })
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})