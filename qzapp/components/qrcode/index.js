// components/qrcode/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    qrcodeWindow: {
      type: Boolean,
      value: false
    },
    headPic: {
      type: String,
      value: ''
    },
    userName:{
      type:String,
      value:''
    },
    phone: {
      type: Number,
      value: 0
    },
    qrCode: {
      type: String,
      value: ''
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
    switchQrcode(){
      this.triggerEvent('switchQrcode',{})
    }
  }
})
