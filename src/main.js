// 入口文件

// 引入vue文件
import Vue from 'vue'
// 引入app组件, 所有组件的父组件
import App from './App.vue'
//关闭生产提示
Vue.config.productionTip = false
//引入 store, 因为文件名是index.js所以可以直接引到文件夹就可以
import store from './store'

new Vue({
  render: h => h(App),

  store
}).$mount('#app')

