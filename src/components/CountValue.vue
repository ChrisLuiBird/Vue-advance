<template>
  <div>
        <h2>当前的求和为:{{sum}}</h2>
        <template class="center">
            <select v-model="number">
                <option :value="1">1</option>
                <option :value="2">2</option>
                <option :value="3">3</option>
            </select>

            <button @click="increament">+</button>
            <button @click="decreament">-</button>
            <button @click="increamentOdd">奇数再加</button>
            <button @click="increamentWait">等等再加</button>
        </template>
  </div>
</template>

<script>
export default {
    data() {
        return {
            number:1,
            sum:0
        }
    },
    methods: {
        increament(){},
        decreament(){},
        increamentOdd(){},
        increamentWait(){}

    },
}
</script>

<style>
    .center{
        display: flex;
        justify-content: space-between;
        flex-wrap:wrap
    }
</style>