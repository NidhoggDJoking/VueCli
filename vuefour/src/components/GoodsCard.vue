<template>
    <div>
            {{data}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            data:''
        }
    },
    //失败 (vue-resource已经不被官网推荐)
    // created() {
    //     var url='https://free-api.heweather.net/s6/weather/now?location=beijing&key=eaee87e2510b4e9ba269de0b1e392e79';
    //     var that = this;
    //     this.$http.jsonp(url,{credentials:true}).then(res =>{
    //         that.data=res.body;
    //         console.log(res);
    //     }).catch(error =>{
    //         console.error(error);
    //     })
    // },
}
</script>

<style scoped>

</style>
