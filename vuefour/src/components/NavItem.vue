<template>
    <div class="nav">
        <div class="item"><i class="iconfont iconaccount"></i></div>
        <div class="item"><i class="iconfont iconaccount"></i></div>
        <div class="item"><i class="iconfont iconaccount"></i></div>
        <div class="item"><i class="iconfont iconaccount"></i></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('//at.alicdn.com/t/font_1308522_ghqupjiamxr.css');
.nav{
    width: 100%;
    height: 4rem;
    background-color: #fff;
    box-shadow: 0px 0px 4px 0px #bfbfbf;
    display: flex;
    align-items: center;
    justify-content:space-around;
}
.item{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ececec;
    /* animation:changeBg 20s infinite; */
    display: flex;
    justify-content: center;
    align-items: center;
}
@keyframes changeBg{
    0%{background-color:#ED5564;}
    10%{background-color:#FB6E52;}
    20%{background-color:#FFCE55;}
    30%{background-color:#A0D468;}
    40%{background-color:#48CFAE;}
    50%{background-color:#4FC0E8;}
    60%{background-color:#5D9CEC;}
    70%{background-color:#AC92ED;}
    80%{background-color:#EC87BF;}
    90%{background-color:#ED5564;}
}
</style>
