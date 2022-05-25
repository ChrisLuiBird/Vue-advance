export default {
    //可以在组件中指定模块
    namespaced:true,
    actions:{},
    mutations:{
        ADD_PERSON(state, person){
            state.personList.unshift(person)
        }
    },
    getters:{},
    state:{ personList:[{'id':'001','name':'chris'}]}
}