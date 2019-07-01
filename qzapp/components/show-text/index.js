// components/show-text/index.js

import { NoticeModels } from '../../models/notice.js'
let noticeModels = new NoticeModels()

var WxParse = require('../../utils/wxParse/wxParse.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    noticeId:{
      type: String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  lifetimes: {
    attached: function () {
      var that = this;
      let jsonData = {
        notice_id: this.properties.noticeId
      }
      noticeModels.getMyNotice(jsonData,(res)=>{
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
