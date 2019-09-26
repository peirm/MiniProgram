const TOKEN = 'toekn';

App({
  globalData: {
    token: ''
  },
  // 生命周期函数：后台存活2个小时
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function(options) {
    // console.log(options);
    // console.log('小程序初始化完成了：onLaunch');

    // 获取用户的信息，斌给获取到用户信息之后，将用户的信息传递给服务器
    // 异步调用
    wx.getUserInfo({
      success: (res) => {
        // console.log(res)
      }
    })
    // setTimeout(() => {
    //   let err = new Error();
    //   throw err
    // }, 3000)


    // 1.先从缓存中去除token
    const token = wx.getStorageSync(TOKEN);
    
    // 2.判断token是否有值
    if(token && token.length !== 0){// 已经有token，验证token是否过期
      // this.check_token(token);
    } else { // 没有token，进行登陆操作
      // this.login()
    }
  },
  check_token(token) {
    console.log('执行了验证token的操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        if(!res.data.errCode){
          console.log('token有效')
          this.globalData.token = token;
        } else {
          cosnole.log('token无效，重新登录')
          this.login()
        }
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },
  login() {
    console.log('执行了登陆操作')
    // 登陆操作
    wx.login({
      // code只有五分钟的有效期
      success: (res) => {
        // 1.获取code
        const code = res.code;

        // 2.将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            // 1.取出token
            const token = res.data.token

            // 2.将token保存在globalData
            this.globalData.token = token;

            // 3.进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {
    // console.log('页面显示出来了：onShow');
    // 判断是通过什么方式打开的小程序
    // console.log(options);
    // switch(options.scene){
    //   case 1001:
    //     break;
    //   case 1005: 
    //     break;
    // };
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {
    // console.log('界面被隐藏时会执行：onHide');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {
    // console.log('小程序中发生了错误的时候执行：onError');
  },
  globalData: {
    name: 'prm612',
    age: 18
  }
})