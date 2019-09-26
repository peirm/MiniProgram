// pages/popup/popup.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '加载中',
      duration: 1000,
      icon: 'loading',
      // image: "/assets/icon/icon.png",
      mask: true,
      success: function(){
        console.log("展示弹窗成功")
      },
      fail: function(){
        console.log("展示弹窗失败")
      },
      complete: function(){
        console.log("完成函数的调用")
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容，哈哈哈哈',
      // showCancel: false,
      // cancelText: "退出",
      // cancelColor: "red",
      // confirmText: "是的",
      // confirmColor: "red",
      success: function(res){
        console.log(res)
        if(res.cancel){
          console.log("用户点击了取消按钮")
        }
        if(res.confirm){
          console.log("用户点击了确定按钮")
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '正在加载',
      mask: true
    })
    setTimeout(function(){
      // 必须手动调用hideLoading才会让loading消失
      wx.hideLoading()
    },1000)
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: 'red',
      success: function(res){
        console.log(res)
      }
    })
  },

  // 分享/转发
  onShareAppMessage: function(options){
    return {
      title: '你好啊，六十二',
      path: 'pages/about/about',
      imageUrl: '/assets/icon/icon.png'
    }
  }
})