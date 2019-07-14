<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" test="joking"/>
    <HelloJoking/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import HelloJoking from '@/components/HelloJoking.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    HelloJoking,
  },
};
</script>
