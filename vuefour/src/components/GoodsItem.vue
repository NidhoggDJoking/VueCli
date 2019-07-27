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
    //成功!
    created() {
        var url='https://free-api.heweather.net/s6/weather/now?location=beijing&key=eaee87e2510b4e9ba269de0b1e392e79';
        Axios.get(url).then(res =>{
            this.data = res.data.HeWeather6[0]
            console.log(res);
        }).catch(error =>{
            console.log(res);
        })
    },
}
</script>

<style scoped>

</style>
