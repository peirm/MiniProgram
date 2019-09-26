// pages/zdyzj/zdyzj.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0,
    isShow: true
  },
  onLoad(options){
    console.log(options)
  },
  onUnload(){
    // console.log('页面退出')
    // 1.获取navigator页面的页面对象
    // getCurrentPages当前所有栈的页面
    const pages = getCurrentPages();
    const navigator = pages[pages.length - 2]

    // 2.调用页面对象的setData
    navigator.setData({
      title: '呵呵呵呵'
    })
  },
  handleBack(){
    wx.navigateBack({
      delta: 1
    })
  },
  handleIncrement(event){
    console.log(event)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleTabClick(event){
    console.log(event)
  },
  handleIncrementCpn(){
    // 修改my-select中的counter
    // 1.获取组件对象
    let my_select = this.selectComponent('.sel-class')
    // console.log(my_select)

    // 2.通过setData修改组件中的数据(此方法不推荐/不规范)
    // my_select.setData({
    //   counter: my_select.data.counter + 1
    // })
    
    // 3.通过方法对数据进行修改(推荐)
    my_select.incrementCounter(10)
  },
  handleChangeShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  }
})