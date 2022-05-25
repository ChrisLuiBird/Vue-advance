<template>
  <div>
        <h2>当前的求和为:{{sum}}</h2>
        <h2> 我在:{{school}}学{{subject}}</h2>
        <h2>当前的求和放大10倍为:{{bigSum}}</h2>
        <template class="center">
            <select v-model="number">
                <option :value="1">1</option>
                <option :value="2">2</option>
                <option :value="3">3</option>
            </select>

            <button @click="increament(number)">+</button>
            <button @click="decreament(number)">-</button>
            <button @click="increamentOdd(number)">奇数再加</button>
            <button @click="increamentWait(number)">等等再加</button>
        </template>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    data() {
        return {
            number:1,
        }
    },
    methods: {
        // increament(){
        //     this.$store.commit('ADD',this.number)
        // },
        // decreament(){
        //     this.$store.commit('SUBSTRACT',this.number)
        // },
        ...mapMutations('sumModule',{increament:'ADD', decreament:'SUBSTRACT'}),
        // increamentOdd(){
        //     this.$store.dispatch('addOdd',this.number)
        // },
        // increamentWait(){
        //      this.$store.dispatch('addWait',this.number)
        // }
        ...mapActions('sumModule',{increamentOdd:'addOdd', increamentWait:'addWait'})

    },
    computed:{
        //对象写法
        // ...mapState({sum:'sum',school:'school',subject:'subject'})

        //数组写法
        ...mapState('sumModule',['sum','school','subject']),
        ...mapGetters('sumModule',['bigSum'])
    }
}
</script>

<style>
    .center{
        display: flex;
        justify-content: space-between;
        flex-wrap:wrap
    }
</style>