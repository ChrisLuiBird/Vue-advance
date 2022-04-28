<template>
  <div class="todo-footer" v-show="total">
		<label>
			<!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
			<input type="checkbox" v-model="isAll"/>
		</label>
		<span>
			<span>已完成{{totalDone}}</span> / 全部{{total}}
		</span>
		<button class="btn btn-danger" @click="clearDone">清除已完成任务</button>
	</div>
</template>

<script>
export default {
    name:"EventFooter",
	props:['todoList'],
	methods: {
		clearDone(){
			this.$emit('clearDoneList');
		}
	},
	computed:{
		totalDone(){
			return this.todoList.reduce((pre, todo)=> {return pre + (todo.isDone?1:0)},0);
		},
		total(){
			return this.todoList.length;
		},
		isAll:{
			get(){
				return this.total === this.totalDone && this.total > 0
			},
			set(val){
				this.$emit('handleAll', val);
			}
		}
	}
}
</script>


<style scoped>
	/*footer*/
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>