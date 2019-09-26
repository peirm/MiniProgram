// pages/navigator/navigator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '哈哈哈哈'
  },
  handlePushZdyzj(){
    wx.navigateTo({
      url: '/pages/zdyzj/zdyzj?title=你好啊',
    })
  }
})