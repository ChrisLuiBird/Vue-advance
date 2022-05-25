<template>
  <div>
    <EventInput :addTodo="addTodo"/>
    <EventList :todoList='todoList'/>
    <EventFooter :todoList='todoList' @handleAll='handleAll' @clearDoneList='clearDoneList'/>
  </div>
</template>

<script>
import EventInput from "./components/EventInput.vue";
import EventFooter from "./components/EventFooter.vue";
import EventList from "./components/EventList.vue";

export default {
  name: "App",
  data(){
		return{
			todoList: JSON.parse(localStorage.getItem('todo')) || []
		}
	},
  methods:{
    addTodo(todo){
      this.todoList.unshift(todo);
    },
    check(val){
      for(let item of this.todoList){
        if(item.id === val){
          item.isDone = !item.isDone;
          return
        }
      }
    },
    handleUpdate(val, newTitle){
      for(let item of this.todoList){
        if(item.id === val){
          item.title = newTitle;
          return
        }
      }
    },
    handleDel(id){
      this.todoList.forEach(item =>{
        if(item.id === id){
          this.todoList = this.todoList.filter(item => item.id !== id); 
        }
      })
    },
    handleAll(val){
      this.todoList.forEach(item =>{item.isDone = val})
    },
    clearDoneList(){
      this.todoList = this.todoList.filter(todo => !todo.isDone)
    }
  },
  components: {
    EventInput,
    EventFooter,
    EventList
  },
  watch:{
    todoList:{
      deep:true,
      handler(val){
        localStorage.setItem('todo', JSON.stringify(val))
      }
    
    }
  },
  mounted(){
    this.$bus.$on('check',this.check);
    this.$bus.$on('handleUpdate',this.handleUpdate);
    this.$bus.$on('handleDel',this.handleDel);
  },
  beforeDestroy(){
    this.$bus.$off();
  }
};
</script>