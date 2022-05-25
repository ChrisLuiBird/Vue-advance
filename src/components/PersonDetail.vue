<template>
  <div>
    <hr />
    <h2>人员列表</h2>

    Count组件的求和为: {{sum}}
    <br>
    <input type="text" v-model="name"> <button @click="add">添加</button>
    <ul>
        <li v-for="p of personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import {nanoid} from 'nanoid'
export default {
    data() {
        return {
            name:'',
        }
    },
    computed:{
        ...mapState('sumModule',['sum']),
        ...mapState('personModule',['personList'])
        
    },
    methods: {
        add(){     
            this.addPerson({name:this.name, id:nanoid()});
            this.name='';
        },
        ...mapMutations('personModule',{'addPerson':'ADD_PERSON'})
        
    },
};
</script>