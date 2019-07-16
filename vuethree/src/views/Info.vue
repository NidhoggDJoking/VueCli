<template>
<div>
    <ul>
        <li
            v-for="(item,index) in list"
            :key="index"
            @click="choose(index)"
            :class="{active: index == lishi && lishi!=='' }"
            >{{item}}</li>
    </ul>
    <button type="buttom" @click="add()">添加</button>
     <ul>
        <li
            v-for="(item,index) in targer"
            :key="index"
            >{{item}}</li>
    </ul>
</div>
</template>

<script>

export default {
    name:'info',
    data () {
        return{
            lishi:"",
            list:[1,2,3,4,5,6,7,8,9],
            targer:[]
        }
    },
    methods:{
        choose(index){
            this.lishi=index
        },
        add(){
            if(this.lishi==="") return
            this.targer.push(this.list[this.lishi])
            this.lishi=""
        }
    }
}
</script>

<style>
    .active{
        color: red;
    }
</style>
