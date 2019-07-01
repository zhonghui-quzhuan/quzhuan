// components/search/index.js
import {
  PublicModels
} from '../../models/public.js'
let publicModels = new PublicModels();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    searchType: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ''
    },
    keywords: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    history: wx.getStorageSync('history') ? wx.getStorageSync('history') : []
  },

  lifetime: {
    attached: function() {

    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 开启搜索框
     */
    openSearch: function() {
      var that = this;
      that.triggerEvent('openSearch', {});
    },

    /**
     * 搜索
     * 关键字添加历史记录
     */
    searchKeywords: function(e) {
      var that = this;
      let formId = e.detail.formId;
      let history = that.data.history;
      let keywords = e.detail.value.keywords;
      if (keywords != undefined)
      history.push(keywords)
      history = publicModels.uniq(history)
      wx.setStorageSync('history', history);
      that.setData({
        history: history
      })
    },

    /**
     * 清空历史记录
     */
    deleteHistory() {
      var that = this;
      wx.clearStorageSync('history')
      that.setData({
        history: []
      })
    },

    /**
     * 查询关键字
     */    
    selectKeyword(e){
      console.log(e)
      var that= this;
      const keyword = e.currentTarget.dataset.value;

    },

    /**
     * 
     */
  }
})