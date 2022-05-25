export default {
    //可以在组件中指定模块
    namespaced:true,
    actions:{
        addOdd(context, val){
            if(context.state.sum % 2){
                context.commit('ADD', val);
            }        
        },
        addWait(context, val){
            setTimeout(function(){
                context.commit('ADD', val);
            },1000)
        }
    },
    mutations:{
        ADD(state, val){
            state.sum += val;
        },
        SUBSTRACT(state, val){
            state.sum -= val
        },
    },
    getters:{
        bigSum(state){
            return state.sum*10;
        }
    },
    state:{
        sum:0,
        school: 'cr',
        subject:'front-end',
    }
}