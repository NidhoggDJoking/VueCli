<template>
  <div class="home">
    <Swiper :banner="banner"/>
    <NavItem></NavItem>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from '@/components/Swiper.vue';
import NavItem from '@/components/NavItem.vue';
export default {
  name: 'home',
  components: {
    Swiper,
    NavItem,
  },
  data(){
    return{
        banner:[
          {url:'http://baidu.com',image:require("../image/Swiper/001.jpg")},
          {url:'https://www.jianshu.com',image:require("../image/Swiper/002.jpg")},
          {url:'https://juejin.im/timeline',image:require("../image/Swiper/003.jpg")},
          {url:'https://www.csdn.net',image:require("../image/Swiper/004.jpg")},
          {url:'https://www.w3cschool.cn',image:require("../image/Swiper/005.jpg")},
          {url:'https://www.bilibili.com/',image:require("../image/Swiper/006.jpg")}
        ] 
    }
},
created() {
      document.title = 'Home'
      // Vuejs 单页应用在iOS系统下部分APP的webview中 标题不能通过 document.title = xxx 的方式修改
      // 使用插件 vue-wechat-title
    },
    mounted() {
      // 本地存储要写在mounted生命周期之后
      sessionStorage.setItem("Nidhogg", "Joking");
      localStorage .setItem("Egoist", "Inori");
    }
};
</script>
