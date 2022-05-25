<template>
   <li>
		<label>
			<!-- 可以用 v-model写， 不建议，因为改props数据了-->
			<input type="checkbox" :checked='todoObj.isDone' @change="handleCheck(todoObj.id)"/>
			
			<span v-show="!todoObj.isEdit">{{todoObj.title}}</span>
			<input v-show="todoObj.isEdit" type="text" @blur="handleBlur(todoObj, $event)" :value="todoObj.title" ref="editBtn" />
		</label>
		<button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
		<button v-show="!todoObj.isEdit" class="btn btn-danger" @click="handleEdit(todoObj)">编辑</button>
	</li>
</template>
	
<script>
export default {
    name:"EventItem",
	props:['todoObj'],
	methods: {
		handleCheck(val){
			this.$bus.$emit('check',val)
		},
		handleDelete(id){
			if(confirm('delete?')){
				this.$bus.$emit('handleDel',id)
			}
		},
		handleBlur(todoObj,e){
			todoObj.isEdit = false;
			this.$bus.$emit('handleUpdate',todoObj.id,e.target.value)
		},
		handleEdit(todoObj){
			
			//todoObj.hasOwnProperty('isEdit') 不推荐使用， 因为客户端传恶意数据可导致服务器崩溃
			if(!Object.prototype.hasOwnProperty.call(todoObj, 'isEdit')){
				this.$set(todoObj,'isEdit', true);
			}else{
				todoObj.isEdit = true;
			}

			this.$nextTick(() => {
				console.log(this.$refs.editBtn)
				this.$refs.editBtn.focus();
			})
		}
	}
}
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}
</style>