<template>
    <div class="nav">
        <div class="card">
            <div class="item icon icon1"></div>
            <span>东邪</span>
        </div>
        <div class="card">
            <div class="item icon icon2"></div>
            <span>西毒</span>
        </div>
        <div class="card">
            <div class="item icon icon3"></div>
            <span>中通</span>
        </div>
        <div class="card">
            <div class="item icon icon4"></div>
            <span>南帝</span>
        </div>
        <div class="card">
            <div class="item icon icon5"></div>
            <span>北丐</span>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>

.nav {
    width: 100%;
    height: 5.7rem;
    background-color: #fff;
    box-shadow: 0px 0px 4px 0px #bfbfbf;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: absolute;
    top: 13rem; */
    z-index: 1;
}

.item {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ececec;
    /* animation:changeBg 20s infinite; */
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px 0px #a7a7a7;
}

.card {
    margin-top: 0.5rem;
    text-align: center;
}

span {
    color: #888;
    font-size: 13px;
    margin-top: 3px;
}

@keyframes changeBg {
    0% {
        background-color: #ED5564;
    }

    10% {
        background-color: #FB6E52;
    }

    20% {
        background-color: #FFCE55;
    }

    30% {
        background-color: #A0D468;
    }

    40% {
        background-color: #48CFAE;
    }

    50% {
        background-color: #4FC0E8;
    }

    60% {
        background-color: #5D9CEC;
    }

    70% {
        background-color: #AC92ED;
    }

    80% {
        background-color: #EC87BF;
    }

    90% {
        background-color: #ED5564;
    }
}
.icon1{
    background: url(../image/Icon/icon-camera.png);
}
.icon2{
    background: url(../image/Icon/icon-facebook.png);
}
.icon3{
    background: url(../image/Icon/icon-music.png);
}
.icon4{
    background: url(../image/Icon/icon-linkedin.png);
}
.icon5{
    background: url(../image/Icon/icon-youtube.png);
}
.icon{
    background-size: 50px 50px;
}
</style>