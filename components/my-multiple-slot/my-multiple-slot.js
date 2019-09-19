// components/my-multiple-slot/my-multiple-slot.js
Component({
  /* 组件的属性列表 */
  properties: {

  },

  /* 组件的初始数据 */
  data: {

  },

  /* 组件的方法列表*/
  methods: {

  },
  /* 定义组件的配置选项 */
  // multipleSlots：在使用多插槽时需要设置true
  // styleIsolation
  options: {
    multipleSlots: true
  },
  /* 外界给组件传入额外的样式 */
  externalClasses: [],

  /* 可以监听属性的改变 */
  observers: {
    // counter: function(newval){
    //   console.log(newval)
    // }
  },
  /* 组件中监听生命周期函数 */
  // 1.监听所在页面的生命周期
  pageLifetimes: {
    show(){
      console.log("监听组件所在页面显示出来时")
    },
    hide(){
      console.log("监听组件所在页面隐藏起来时")
    },
    resize(){
      console.log("监听页面尺寸的改变")
    }
  },

  // 2.监听组件本身的生命周期
  lifetimes: {
    created(){
      console.log("组件被创建出来")
    },
    attached(){
      console.log("组件被添加到页面")
    },
    ready(){
      console.log("组件被渲染出来")
    },
    moved(){
      console.log("组件被移动到另外一个节点")
    },
    detached(){
      console.log("组件被移除掉")
    }
  }
})
