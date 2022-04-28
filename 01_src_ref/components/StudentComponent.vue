<template>
    <div>
        <div>
            学生名字: {{name}}
        </div>
        <div>
            年龄: {{age}}
        </div>
    </div>
</template>

<script>
export default({
    name:'StudentComponent',
    data(){
        return {
            name:'Chris',
            age:18
        }
    }

})
</script>
