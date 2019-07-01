import {
  HTTP
} from "../utils/client.js"

class NewsModels extends HTTP {
  //获取公告
  getMyNews(jsonData, sCallback) {
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
  NewsModels
}