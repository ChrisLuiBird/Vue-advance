<template>
    <ul class="todo-main">
		<EventItem v-for="item of todoList" :key="item.id" :todoObj='item'/>
	</ul>
</template>

<script>
import EventItem from "./EventItem.vue";
export default {
    name:"EventList",
    components:{EventItem},
	props:['todoList'],
	
}
</script>
<style scoped>
	/*main*/
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
</style>