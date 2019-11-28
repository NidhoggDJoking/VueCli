<template>

<div class="swiper">

<swiper :options="swiperOption">

<swiper-slide v-for="(item, index) in slides" :key="index"><img :src="item"></swiper-slide>

</swiper>

</div>

</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default{

name: 'test2',

data(){

return {

slides: [

'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511015180050&di=0d2ee92eead284e8133d6df07535d75a&imgtype=0&src=http%3A%2F%2Fimg.sc115.com%2Fuploads1%2Fsc%2Fjpgs%2F1512%2Fapic16988_sc115.com.jpg',

'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511015180167&di=7412fd486c47c15f1d27485be0d7bd28&imgtype=0&src=http%3A%2F%2Fwww.duoxinqi.com%2Fimages%2F2012%2F06%2F20120605_8.jpg',

'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511015180167&di=3bcedd33a30129b9951be2a81f9b505c&imgtype=0&src=http%3A%2F%2Fpic1.5442.com%2F2015%2F0420%2F06%2F05.jpg',

'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511015180050&di=0d2ee92eead284e8133d6df07535d75a&imgtype=0&src=http%3A%2F%2Fimg.sc115.com%2Fuploads1%2Fsc%2Fjpgs%2F1512%2Fapic16988_sc115.com.jpg',

'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511015180167&di=7412fd486c47c15f1d27485be0d7bd28&imgtype=0&src=http%3A%2F%2Fwww.duoxinqi.com%2Fimages%2F2012%2F06%2F20120605_8.jpg',

'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511015180167&di=3bcedd33a30129b9951be2a81f9b505c&imgtype=0&src=http%3A%2F%2Fpic1.5442.com%2F2015%2F0420%2F06%2F05.jpg'

],

//轮播config

swiperOption: {

// 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger

// debugger: true,

initialSlide :1,

autoplay: {

delay: 3000,

stopOnLastSlide: false,

disableOnInteraction: false,

},

autoplayDisableOnInteraction : false,

slidesPerView: "auto",//设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。

centeredSlides: true//<span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>

}

}

},

components: {

swiper,

swiperSlide

}

}

</script>

<style lang="stylus" scoped>

.swiper

width 100%;

height 160px

overflow hidden

.swiper-slide

width 80%;

height 160px

&.swiper-slide-active

img

margin-top 0

width 100%

height 100%

img

display block

margin 0 auto

margin-top 3.5%

width 90.625%

height 90.625%

vertical-align middle

-webkit-transition all 1s ease 0s

-moz-transition all 1s ease 0s

-ms-transition all 1s ease 0s

-o-transition all 1s ease 0s

transition all 1s ease 0s

</style>
————————————————
版权声明：本文为CSDN博主「MrFano」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/MrFano/article/details/79931923