//该文件用于创建vuex 的核心管理

//先引入Vue 为了在vue中使用vuex
import Vue from 'vue';

//引入vuex 为了创建store实例
import Vuex from 'vuex';
Vue.use(Vuex);

import sumModule from './Count'
import personModule from './Person'


// //该对象用于响应 vuex 的 action 主要做逻辑性处理 或者是 api调用
// const actions = { 
// };

// //真正帮助我们去操作数组的的对象
// const mutations = {
// };

// //用于储存/状态
// const state = {
   
   
// };

//配置getter
// const getters = {
   
// }
//创建vuex实例, 用法和vue差不多, 在构建行数传入一个对象
//这里记得Store要大写
export default new Vuex.Store({

    // actions:actions的简写
    // actions,
    // mutations,
    // state,
    // getters
    

    //使用模块化
    modules:{
        sumModule,
        personModule
    }


})