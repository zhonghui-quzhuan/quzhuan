import {
  HTTP
} from "../utils/client.js"

class IndexModels extends HTTP {
  //获取全国市级数据列表
  getLocationList(sCallback) {
    this.requset({
      url: '/index/City/List',
      data: data,
      header: 2,
      success: (res) => {
        sCallback(res)
      }
    })
  }

  /**
   * 公告
   */
  newsList(sCallback){
    this.requset({
      url: '/index/Notice/threeNotice',
      data: {},
      header: 2,
      success: (res) => {
        sCallback(res)
      }
    })
  }
}

export {
  IndexModels
}