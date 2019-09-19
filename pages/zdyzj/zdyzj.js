// pages/zdyzj/zdyzj.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0
  },
  handleIncrement(event){
    console.log(event)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleTabClick(event){
    console.log(event)
  }
})