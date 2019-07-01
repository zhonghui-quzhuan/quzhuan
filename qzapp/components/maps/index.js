// components/maps/index.js
import {
  MapModels
} from '../../models/map.js'
let mapModels = new MapModels()
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
    statusHeight: wx.getSystemInfoSync().statusBarHeight + 46,
    markers: [],  
  },

  lifetimes:{
    attached:function(){
      var that = this;
      wx.getLocation({
        type: 'gcj02',
        success(res) {
          let jsonData = {
            city_name: '',
            lng: res.longitude,
            lat: res.latitude
          }
          mapModels.getSurroundingShop(jsonData, (res) => {
            console.log(res.data.list)
            let markers = res.data.list;
            for (let i in markers) {
              markers[i].width = 20
              markers[i].height = 25
              markers[i].latitude = markers[i].company_lat
              markers[i].longitude = markers[i].company_lng
              markers[i].iconPath = "./img/location.png"
            }
            that.setData({
              markers: markers,
              lng: jsonData.lng,
              lat: jsonData.lat
            })
          })
        }
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    regionchange(e) {//视野发生变化时触发
      console.log(e.type)
    },
    markertap(e) {//点击标记点时触发，会返回marker的id
      console.log(e.markerId)
    }
  }
})
