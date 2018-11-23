App({  //该实例中，this指向该实例，在其他实例中，可以通过getApp()来获取该实例；
  globaldata:{
    username:'xihaoyan'
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log('初始化完成时', options)
    // console.log(this)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('小程序启动', options)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('从前台进入后台')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log(msg)
  },
  /**
   * 当进入的页面找不到时触发
   */
  onPageNotFound:function(obj){
    wx.switchTab({
      url: 'pages/index/index'
    })
  }
})
