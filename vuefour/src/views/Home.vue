<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" :banner="banner"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data(){
    return{
        banner:[
          {url:'http://baidu.com',image:require("../image/001.jpg")},
          {url:'https://juejin.im/timeline',image:require("../image/002.jpg")},
          {url:'https://juejin.im/timeline',image:require("../image/003.jpg")},
          {url:'https://juejin.im/timeline',image:require("../image/004.jpg")},
          {url:'https://juejin.im/timeline',image:require("../image/005.jpg")},
          {url:'https://www.bilibili.com/',image:require("../image/006.jpg")}
        ] 
    }
}
};
</script>
