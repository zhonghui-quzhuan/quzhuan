import {
  HTTP
} from "../utils/client.js"

class MapModels extends HTTP {
  //获取周边商家
  getSurroundingShop(jsonData,sCallback) {
    this.requset({
      url: '/index/Around/dituData',
      data: jsonData,
      header: 2,
      success: (res) => {
        sCallback(res)
      }
    })
  }
}

export {
  MapModels
}