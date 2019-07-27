<template>
    <div class="top">
        <div class="info">
            <div class="user-avatar">
                <img :src="src">
            </div>
            <div class="user-name"><span>{{name}}</span></div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        name:String,
        src:String,
    }
}
</script>

<style scoped>
.top{ 
    /* -webkit-animation:changeBg 20s infinite; 
    -moz-animation:changeBg 20s infinite; 
    animation:changeBg 20s infinite; */
    background-color:#ED5564;
    background-image: url(../image/BackgroundWall/2.gif);
    background-size: cover;
    text-align: center;
    width: 100%;
    height: 10rem;
    position: relative;
    z-index:1;
}
.info {
    width: 12rem;
    height: 6rem;
    margin: -3.5rem 0 0 -6rem;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
}
.user-avatar {
    background-color: #FFF;
    width: 5rem;
    height: 5rem;
    margin: 0 auto; 
    border-radius: 100%;
    box-shadow: 0px 0px 9px 1px #545454;
}
.user-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
}
.user-avatar:active{
    box-shadow: 0px 0px 12px 5px #7d7d7d;
}
.user-name span{
    color: #FFF;
    font-weight:600;
    font-size: 1em;
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
