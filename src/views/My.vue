<template>
  <div class="about">
    <Item tit="个人中心" @back='back' @settin='settin'></Item>
    <!-- <BackgroundWall name="Joking" src="https://avatar.csdnimg.cn/2/B/1/1_qq_38062409_1548138211.jpg"></BackgroundWall> -->
    <Wall ref="childAct" name="Joking" src="https://avatar.csdnimg.cn/2/B/1/1_qq_38062409_1548138211.jpg"></Wall>
  </div>
</template>
<script>
import Item from '@/components/HeadItem.vue';
// import BackgroundWall from '@/components/BackgroundWall';
import Wall from '@/components/Wall.vue';
export default {
  name: 'my',
  components: {
     Item,
    //  BackgroundWall,
     Wall,
  },
  data() {
    return {
    }
  },
  methods: {
    back() {
      console.log('父组件——按钮点击');
      // this.$router.back(-1);
      // this.$router.go(-1);
      // this.$router.back();
      window.history.go(-1);
    },
    settin() {
      this.$refs.childAct.fatherUse();
    }
  },
}
</script>
<style>
</style>
