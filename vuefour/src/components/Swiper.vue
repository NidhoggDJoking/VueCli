<template>
    <div class="swiper-container swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
          <a :href="item.url">
            <div class="swiper-img flex3">
              <img :src='item.image' width="100%"  style="display:block;">
            </div>
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
</template>

<script>

  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.min.css'; 
  export default{
    // props:['banner'],
   props: {
    banner: Array,
  },
    mounted(){
      var mySwiper = new Swiper('.swiper1',{   
                pagination: '.swiper-pagination',
                autoplay:true,
                paginationClickable: true,
                centeredSlides: true,
                autoplayDisableOnInteraction: false,
                preventClicks: false,
                speed: 600,
                observer:true,
                loop: true,
                observeParents:true,
                lazyLoading : true,//懒加载开启
                
       })
     
    }
  }

</script>

<style scoped>
@import "../../node_modules/swiper/dist/css/swiper.css";
</style>
