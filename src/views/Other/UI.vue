<template>
    <!-- <h3>路由测试</h3> -->
    <div>
        <label>route:</label><h3>{{msg}}</h3>
        <label>Vuex:</label><h5>{{number}}</h5>
        <h3 ref="nextTickDiv">{{text}}</h3>
        <button @click="changeText()">$nextTick</button>
    </div>
</template>

<script>
import store from '@/store'
export default {
    store,
    data() {
        return {
            msg:'路由测试,此为当前数据,显示为传值失败!',
            number:store.state.count,
            text:'data-text',
        }
    },
    methods:{
        // Vue 在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。
        // Vue.$nextTick(callback)，当dom发生变化更新后执行的回调
        changeText() {
            this.text = "fun-text";
            setTimeout(() => {
                console.log(this.$refs.nextTickDiv.innerHTML); //3.fun-text
            }, 0);
            this.$nextTick(() => {
                console.log(this.$refs.nextTickDiv.innerHTML); //2.fun-text
            });
            console.log(this.$refs.nextTickDiv.innerHTML); //1.data-text (方法完成后才开始渲染,所以此时数据还没发生变化)
        },
        // 点击按钮之后，发现控制台中this.$nextTick()和setTimeout()都发生了改变
        // 可以发现this.$nextTick和setTimeout的效果是一样的，都是将回调方法放入异步队列中
        // this.$nextTick是当dom发生变化更新后执行的回调。setTimeout只是一个异步延迟执行
    },
    created() {
        // PS: this.$router 传值 : this.$route 取值
        console.log(this.$route.params)
        if(this.$route.params.text){
            this.msg = this.$route.params.text
        }else{
            console.log('路由传值失败!');
        }
    },
    mounted() {
        this.$parent.sonUse('子组件使用父组件方法');
    }
}
</script>
<style scoped>
label{
    font-size: 1.18em;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
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
