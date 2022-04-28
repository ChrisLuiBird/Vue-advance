// 入口文件

// 引入vue文件
import Vue from 'vue'
// 引入app组件, 所有组件的父组件
import App from './App.vue'
//关闭生产提示
Vue.config.productionTip = false
//引入 vuex
import Vuex from 'vuex'
Vue.use(Vuex)

new Vue({
  render: h => h(App),

  store: 'haha'
}).$mount('#app')
