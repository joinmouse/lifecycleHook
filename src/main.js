// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//模块化加载
import Vue from 'vue'
import Resource from 'vue-resource'
Vue.use(Resource)

import App from './App'

//console.log(vue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: {
    msg:'lifecycle'
  },
  methods: {
    getLists(){
      
    },
    init(){
      //do something 
    }
  },
  beforeCreate(){
    //console.log('beforeCreate',this.msg,this.getLists)
  },

  //异步数据的请求适宜再created的钩子中调用，初始化
  created(){
    this.getLists()
    this.init()
    setTimeout(()=>{
      this.arr=[4,5,6,7]
      console.log('created',document.querySelectorAll('li').length)
      this.$nextTick(()=>{
        console.log('nextTick',document.querySelectorAll('li').length)
      })
    })
    //console.log('created:',this.msg,this.getLists)
  },

  //挂载开始之前被调用：相关的 render 函数首次被调用。
  beforeMount(){
    console.log('beforeMount',document.querySelectorAll('li').length)
  },
  //初始数据的dom渲染，可以获取到dom
  mounted(){

  },

  beforeUpdate(){
    console.log('beforeUpdate',document.querySelectorAll('li').length)
  },
  //数据更新完毕:如果对数据更新做统一处理再updated钩子中处理
  //如果想分别区分不同的数据更新，同时对DOM操作nextTick函数处理
  updated(){
    console.log('update',document.querySelectorAll('li').length)
  },
  beforeDestroy(){

  }, 
  destroyed(){

  },
  activated(){

  },
  deactivated(){

  },

  watch:{
    //对具体某一个数据变化可以统一处理
  }

}).$mount('#app')
