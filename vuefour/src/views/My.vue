<template>
  <div class="about">
    <Item tit="我的VueCli"></Item>
    <BackgroundWall></BackgroundWall>
  </div>
</template>
<script>
import Item from '@/components/HeadItem.vue';
import BackgroundWall from '@/components/BackgroundWall'
export default {
  name: 'my',
  components: {
     Item,
     BackgroundWall,
  },
  data() {
    return {
      
    }
  },
}
</script>
<style>

</style>
