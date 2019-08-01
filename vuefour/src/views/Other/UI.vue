<template>
    <!-- <h3>路由测试</h3> -->
    <h3>{{msg}}</h3>
</template>

<script>
export default {
    data() {
        return {
            msg:'路由测试'
        }
    },
    created() {
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
