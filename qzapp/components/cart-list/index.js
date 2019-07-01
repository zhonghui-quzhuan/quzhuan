// components/cart-list/index.js
import { TouchModels } from '../../models/touch.js'
let touchModels = new TouchModels()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    status: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    buyNumber: 1,
    items: [],
    startX: 0, //开始坐标
    startY: 0,
    items: [{
      name: "祁同伟",
      sex: "男",
      group: "组织",
      phone: "13111111111",
      shortNum: "13111111111",
      mail: "13111111111@189.com",
      unit: "汉东省公安厅",
      department: "汉东省公安厅",
      job: "公安厅厅长",
      function: "管理公安厅",
      comPhone: "13111111111",
      fax: "13111111111",
      homePhone: "13111111111",
      showOrder: "",
      departOrder: "",
      remark: "汉东省公安厅厅长"

    },
    {
      name: "欧阳菁",
      sex: "女",
      group: "群众",
      phone: "13222222222",
      shortNum: "13222222222",
      mail: "13222222222@189.com",
      unit: "京州银行",
      department: "京州银行",
      job: "京州银行行长",
      function: "管理京州银行",
      comPhone: "13222222222",
      fax: "13222222222",
      homePhone: "13222222222",
      showOrder: "",
      departOrder: "",
      remark: "京州银行行长"
    },
    {
      name: "陈岩石",
      sex: "男",
      group: "组织",
      phone: "13333333333",
      shortNum: "13333333333",
      mail: "13333333333@189.com",
      unit: "汉东省检察院",
      department: "汉东省检察院",
      job: "原察院检察长",
      function: "检察长",
      comPhone: "13333333333",
      fax: "13333333333",
      homePhone: "13333333333",
      showOrder: "",
      departOrder: "",
      remark: "原汉东省检察院检察长"
    },
    {
      name: "陆亦可",
      sex: "女",
      group: "组织",
      phone: "13555555555",
      shortNum: "13555555555",
      mail: "13555555555@189.com",
      unit: "汉东省反贪局一处",
      department: "汉东省反贪局一处",
      job: "处长",
      function: "管理一处",
      comPhone: "13555555555",
      fax: "13555555555",
      homePhone: "13555555555",
      showOrder: "",
      departOrder: "",
      remark: "汉东省反贪局一处处长"
    },
    {
      name: "林华华",
      sex: "女",
      group: "组织",
      phone: "13666666666",
      shortNum: "13666666666",
      mail: "13666666666@189.com",
      unit: "汉东省反贪局一处",
      department: "汉东省反贪局一处",
      job: "普通职员",
      function: "普通职员",
      comPhone: "13666666666",
      fax: "13666666666",
      homePhone: "13666666666",
      showOrder: "",
      departOrder: "",
      remark: "普通职员",
    },
    {
      name: "候亮平",
      sex: "男",
      group: "组织",
      phone: "13777777777",
      shortNum: "1377777777",
      mail: "13777777777@189.com",
      unit: "汉东省反贪局",
      department: "汉东省反贪局",
      job: "局长",
      function: "反贪",
      comPhone: "13777777777",
      fax: "13777777777",
      homePhone: "13777777777",
      showOrder: "",
      departOrder: "",
      remark: "汉东省反贪局局长"
    },
    {
      name: "孙连城",
      sex: "男",
      group: "组织",
      phone: "13555555555",
      shortNum: "13555555555",
      mail: "13555555555@189.com",
      unit: "光明区区长办公室",
      department: "光明区区长",
      job: "区长",
      function: "管理光明区",
      comPhone: "13555555555",
      fax: "13555555555",
      homePhone: "13555555555",
      showOrder: "",
      departOrder: "",
      remark: "光明区区长"
    },
    {
      name: "李达康",
      sex: "男",
      group: "组织",
      phone: "13555555555",
      shortNum: "13555555555",
      mail: "13555555555@189.com",
      unit: "京州市市委",
      department: "京州市市委",
      job: "市委书记",
      function: "管理京州市",
      comPhone: "13555555555",
      fax: "13555555555",
      homePhone: "13555555555",
      showOrder: "",
      departOrder: "",
      remark: "京州市市委书记"
    },
    {
      name: "高小琴",
      sex: "女",
      group: "群众",
      phone: "13555555555",
      shortNum: "13555555555",
      mail: "13555555555@189.com",
      unit: "山水庄园",
      department: "山水庄园",
      job: "总经理",
      function: "管理山水庄园",
      comPhone: "13555555555",
      fax: "13555555555",
      homePhone: "13555555555",
      showOrder: "",
      departOrder: "",
      remark: "管理山水庄园"
    },
    ]
  },

  lifetime: {
    attched: function() {
      for (var i = 0; i < 10; i++) {
        this.data.items.push({
          content: i,
          isTouchMove: false //默认全隐藏删除
        })
      }
      this.setData({
        items: this.data.items
      })
    },

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 修改数量
     * 包含点击、输入
     */
    saveNumber(e) {
      var that = this;
      let buyNumber = e.detail;
      that.setData({
        buyNumber: buyNumber
      })
    },

    //手指触摸动作开始 记录起点X坐标
    touchstart: function (e) {
      //开始触摸时 重置所有删除
      let data = touchModels._touchstart(e, this.data.items)
      this.setData({
        items: data
      })
    },

    //滑动事件处理
    touchmove: function (e) {
      let data = touchModels._touchmove(e, this.data.items)
      this.setData({
        items: data
      })
    },

    //删除事件
    del: function (e) {
      wx.showModal({
        title: '提示',
        content: '确认要删除此条信息么？',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            that.data.items.splice(e.currentTarget.dataset.index, 1)
            that.setData({
              items: that.data.items
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
  }
})