<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/info">Info</router-link> -->
      <a @click="goto('/')">Home</a> |
      <a @click="goto('/about')">About</a> |
      <a @click="goto('/info')">Info</a> |
      <a @click="goto('/demo')">Demo</a> 
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    goto(path){
      
      this.$router.replace(path);

      console.log(this.$route.path)
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

