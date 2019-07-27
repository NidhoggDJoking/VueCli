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
    created() {
        var url='https://api.douban.com/v2/book/1220562';
        var list ='';
        var that = this;
        this.$http.jsonp(url,{credentials:true}).then(res =>{
            that.data=res.body;
            console.log(res);
        }).catch(error =>{

        })
    },
}
</script>

<style scoped>

</style>
