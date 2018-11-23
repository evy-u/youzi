// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchKey:'搜索'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var App = getApp();  //获取小程序实例App
    // console.log(App, options,this);
    // wx.startPullDownRefresh()
    // setTimeout(()=>{
    //   wx.stopPullDownRefresh()
    // },1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * Do something when page scroll
   */
  onPageScroll: function (obj) {
    
  },

  /**
   * Do something when page resize
   */
  onResize: function () {
    
  },

  /**
   * 当点击了该tabbar时
   */
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
    console.log(this)
  },

  /**
   * Event handler.手动在页面中绑定的事件bindTap
   */
  viewTap: function () {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
      this.setData({
        text: 'changed data'
      })
    })
  },
  
  /**
   * 跳转到搜索页面
   */
  searchFocus:function(e){
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },

  customData: {
    hi: 'MINA'
  }
})