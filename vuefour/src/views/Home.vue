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
          {url:'http://baidu.com',image:'././image/1.jpg'},
          {url:'https://www.bilibili.com/',image:'./image/1.jpg'}
        ] 
    }
}
};
</script>
