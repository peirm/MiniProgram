// getApp()可以获取App()产生的示例对象
const app = getApp();
const name = app.globalData.name;
const age = app.globalData.age;
// console.log(name, age);

// 注册一个页面
Page({
  data: {
    name: "Prm612",
    age: 22,
    students: [{
        id: 110,
        name: 'kobe',
        age: 22
      },
      {
        id: 120,
        name: 'james',
        age: 26
      },
      {
        id: 130,
        name: 'why',
        age: 18
      },
      {
        id: 140,
        name: 'honey',
        age: 30
      },
    ],
    counter: 0,
    list: []
  },
  handleBtnClick() {
    // console.log("按钮被点击");
    let that = this;
    that.setData({
      counter: that.data.counter + 1
    })
  },
  handleSubtraction() {
    // console.log("按钮被点击");
    let that = this;
    that.setData({
      counter: that.data.counter - 1
    })
  },
  // 获取用户信息
  handGetUserInfo(event) {
    console.log(event)
  },
  // 1.监听页面的生命周期函数
  onLoad() {
    // console.log("onLoad");
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        // console.log(res);
        this.setData({
          list: res.data
        })
      }
    })
  },
  onReady(){
    // console.log("onReady");
  },
  onShow() {
    // console.log("onShow");
  },
  onHide(){
    // console.log("onHide");
  },
  onUnload(){
    // console.log("onUnload");
  },
  // 监听其他事件
  // 监听页面滚动
  onPageScroll(obj){
    // console.log(obj);
  },
  // 监听页面滚动到底部
  onReachBottom(){
    // console.log("页面滚动到底部");
  },
  // 监听下拉刷新
  onPullDownRefresh(){
    // console.log("下拉刷新的事件");
  }
})