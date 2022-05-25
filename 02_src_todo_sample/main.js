// 入口文件

// 引入vue文件
import Vue from 'vue'
// 引入app组件, 所有组件的父组件
import App from './App.vue'
//关闭生产提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
