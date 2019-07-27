<template>
    <div>
            {{data}}
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    data() {
        return {
            data:''
        }
    },
    created() {
        var url='https://api.douban.com/v2/book/1220562';
        Axios.get(url).then(res =>{
            console.log(res);
            this.data = res
        }).catch(error =>{
            console.log(error.messgae)
        })
    },
}
</script>

<style scoped>

</style>
