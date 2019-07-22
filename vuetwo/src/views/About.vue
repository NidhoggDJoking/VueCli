<template>
  <div class="about">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
import store from '@/store/test'
export default {
  name:'about',
  store,
  data (){
    return {
      msg:store.state.count
    }
  }
}
</script>
