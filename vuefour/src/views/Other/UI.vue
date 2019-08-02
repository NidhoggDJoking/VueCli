<template>
    <!-- <h3>路由测试</h3> -->
    <div>
        <h3>{{msg}}</h3>
        <h5>{{number}}</h5>
    </div>
</template>

<script>
import store from '@/store'
export default {
    store,
    data() {
        return {
            msg:'路由测试',
            number:store.state.count,
        }
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
}
</script>
<style scoped>
</style>
