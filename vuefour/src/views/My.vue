<template>
  <div class="about">
    <Item tit="个人中心"></Item>
    <BackgroundWall name="Joking" src="https://profile.csdnimg.cn/2/B/1/1_qq_38062409"></BackgroundWall>
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
