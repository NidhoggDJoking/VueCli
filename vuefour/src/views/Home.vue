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
        banner:[{url:'http://baidu.com',image:'http://img.netbian.com/file/2019/0615/small3b393d1890bed0b0d66b0784cc4d4b0d1560569980.jpg'},{url:'https://www.bilibili.com/',image:'http://img.netbian.com/file/2019/0608/smallece8c6fae0012978195c0ff364bc4c811559962820.jpg'}] 
    }
}
};
</script>
