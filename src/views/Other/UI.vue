<template>
    <!-- <h3>路由测试</h3> -->
    <div>
        <label>route:</label><h3>{{msg}}</h3>
        <label>Vuex:</label><h5>{{number}}</h5>
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
        }
    },
    methods:{
       
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
        this.$parent.sonuse('子组件使用父组件方法');
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
</style>
