// components/add-address/index.js
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
    region: ['选择省', '/市', '/区'],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 获取地址
     */
    getAddress: function() {
      var that = this;
      wx.chooseAddress({
        success(res) {
          const jsonData = {
            userName: res.userName,
            telNumber: res.telNumber,
            region: [res.provinceName, ' ' + res.cityName, ' ' + res.countyName],
            detailInfo: res.detailInfo,
          }
          that.setData(jsonData)
        }
      })
    },
    /**
     * 获取地区
     */
    bindRegionChange: function(e) {
      let region = e.detail.value;
      region = [region[0], ' ' + region[1], ' ' + region[2]];
      this.setData({
        region: region
      })
    },
    /**
     * 保存地址
     */
    saveAddress(){

    }
  }
})