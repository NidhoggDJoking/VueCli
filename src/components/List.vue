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

<style scoped>
.active{
    color: red;
}
li{
    text-align: center;
    font-size: 17px;
    font-weight: 600;
}
button{
    width: 120px;
    height: 35px;
    color: #fff;
    font-size: 14px;
    border-radius: 5px;
    background-color: #01c1f7;
    font-weight: 500;
    margin: 0px auto;
    display: block;
    margin-top: 1rem;
    margin-bottom: 1rem;
    outline: none;
}
</style>
