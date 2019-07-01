import {
  HTTP
} from "../utils/client.js"

class PublicModels extends HTTP {
  /**
   * 数组去重
   * 同时重新排序
   */
  uniq(array) {
    var temp = [];
    var index = [];
    var l = array.length;
    for (var i = 0; i < l; i++) {
      for (var j = i + 1; j < l; j++) {
        if (array[i] === array[j]) {
          i++;
          j = i;
        }
      }
      temp.push(array[i]);
      index.push(i);
    }
    return temp;
  }

  /**
   * 图片转base64
   */
  imgBase64(image){
    // let $this = this;
    // console.log(image)
    // request({
    //   url: image,
    //   method: 'GET',
    //   responseType: 'arraybuffer',
    //   success: function (res) {
    //     let base64 = wx.arrayBufferToBase64(res);
    //     $this.data.userImageBase64 = 'data:image/jpg;base64,' + base64;;
    //   }
    // });

  }

}

export {
  PublicModels
}