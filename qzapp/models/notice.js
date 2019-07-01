import {
  HTTP
} from "../utils/client.js"

class NoticeModels extends HTTP {
  //获取公告
  getMyNotice(jsonData, sCallback) {
    this.requset({
      url: '/index/Notice/OneById',
      data: jsonData,
      header: 2,
      success: (res) => {
        sCallback(res)
      }
    })
  }

}

export {
  NoticeModels
}