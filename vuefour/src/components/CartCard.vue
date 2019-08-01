<template>
        <div class="con-card " :class="show ? 'active' : ''"  >
        <div class="con-card-click" @click="show = !show">
            <div class="con-tit-icon"></div>
            <p class="con-card-tit-head"></p>
        </div>
        <div style="height: 32rem;overflow: scroll;">
        </div>
    </div>
</template>

<script>
export default {
data(){
    return{
        show: true,
    }
},
    created() {
        //用于单页vue启动的适应问题
        var oMeta = document.createElement('meta');
        oMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0, user-scalable=0';
        oMeta.name = 'viewport';
        document.getElementsByTagName('head')[0].appendChild(oMeta);
    },
}
</script>

<style type="text/css">

* {
    margin: 0px;
    padding: 0px;
    border: 0px;
}

body {
    height: 100%;
    background: #333;
}

.con-card {
    position: fixed;
    bottom: -32rem;
    width: 100%;
    height: 34rem;
    background: #fff;
    border-radius: 23px 23px 0px 0px;
    transition: all .4s cubic-bezier(0.71, 0, 0.16, 0.76);
}

.con-tit-icon {
    margin: 0px auto;
    width: 22px;
    height: 6px;
    background: #c7c7c79e;
    border-radius: 15px;
    margin-top: 13px;
    transition: all .4s cubic-bezier(0.71, 0, 0.16, 0.76);
}

.con-card-tit-head {
    /*height: 3rem;*/
    height: 1rem;
    border-bottom: 1px solid #f3f3f3;
    padding-left: 2rem;
    line-height: 3rem;
    font-size: 17px;
    font-weight: 600;
    color: #4a4a4a;
}

.active {
    bottom: 0rem;
}

.active .con-tit-icon {
    width: 48px;
    height: 5px;
    background: #ecebf4;
}


</style>
