// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "你好小程序",
    firstname: 'kobe',
    lastname: 'bryant',
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 45,
    movies: ['星际穿越','盗梦空间','大话西游'],
    nums: [
      [10, 14, 43, 18],
      [5, 32, 11, 18],
      [2, 14, 31, 50],
      [4, 14, 98, 18]
    ],
    letters: ['a', 'b', 'c']
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  handleSwitchcolor(){
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handelSwitchShwo(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handelIncrement(){
    this.setData({
      score: this.data.score + 6
    })
  }
})