<template>
    <div>
        <input v-model="inputVaule"/>
        <button @click="submit">提交</button>
        <ul>
            <todoitm 
                v-for="(item,index) of list"
                :com="item"
                v-bind:key="index"
                :index="indexs"
                @delete="hand"
                ></todoitm>
        </ul>
    </div>
</template>

<script>
import TodoList from '../components/TodoList' 
export default {
    components:{
      'todoitm':TodoList,
    },
    data (){
        return{
            inputVaule:'',
            list:[]
        }
    },
    methods:{
        submit() {
           this.list.push(this.inputVaule);
           this.inputVaule=''
        },
        hand(index){
            this.list.splice(index,1);
        }
    }
}
</script>

