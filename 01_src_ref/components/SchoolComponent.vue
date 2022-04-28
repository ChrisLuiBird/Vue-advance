<template>
    <div class="demo">
        <div>
            学校名字: {{name}}
        </div>
        <div>
            address: {{address}}
        </div>
        <button @click="showName">show showName</button>
    </div>
</template>

<script>
export default({
    name:'SchoolComponent',
    data(){
        return {
            name:'City u',
            address:'HK'
        }
    },
    methods: {
        showName(){
            alert(this.name)
        }
    },
    
})
</script>

<style>
    .demo{
        background-color:skyblue;
    }
</style>
