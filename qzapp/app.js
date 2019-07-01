//app.js
App({
  onLaunch: function(ops) {
    var that = this;
    var version = wx.getUpdateManager();
    version.onCheckForUpdate(function(n) {
      // console.log(n.hasUpdate);
    }), version.onUpdateReady(function() {
      wx.showModal({
        title: "更新提示",
        content: "新版本已经准备好，是否重启应用？",
        success: function(n) {
          n.confirm && version.applyUpdate();
        }
      });
    }), version.onUpdateFailed(function() {
      wx.showModal({
        title: "更新提示",
        content: "新版本下载失败",
        showCancel: !1
      });
    });
  },

  globalData: {
    
  },
  
  config: require("./utils/config.js")
})