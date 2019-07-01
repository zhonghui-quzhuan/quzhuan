// components/number/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    buyNumber: {
      type: Number,
      value: 1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    buyNumber: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 修改数量-输入
     */
    inputNumber(e) {
      console.log(e)
      var that = this;
      let buyNumber = e.detail.value;
      if (buyNumber == '' || buyNumber == 0 || isNaN(buyNumber)) {
        buyNumber = 1;
      }
      that.triggerEvent('saveNumber', buyNumber)
    },

    /**
     * 修改数量-点击
     */
    saveNumber(e) {
      var that = this;
      let i = e.currentTarget.id;
      let buyNumber = that.properties.buyNumber;
      buyNumber = i == 1 ? buyNumber++ : buyNumber--;
      console.log(i == 1 ? buyNumber++ : buyNumber--)
      buyNumber = buyNumber < 1 ? 1 : buyNumber;
      that.triggerEvent('saveNumber', buyNumber)
    }
  }
})