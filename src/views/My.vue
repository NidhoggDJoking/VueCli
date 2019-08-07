<template>
  <div class="about">
    <Item tit="个人中心" @back='back' @settin='settin'></Item>
    <!-- <BackgroundWall name="Joking" src="https://avatar.csdnimg.cn/2/B/1/1_qq_38062409_1548138211.jpg"></BackgroundWall> -->
    <Wall ref="childAct" name="Joking" src="https://avatar.csdnimg.cn/2/B/1/1_qq_38062409_1548138211.jpg"></Wall>
    <Ring></Ring>
  </div>
</template>
<script>
import Item from '@/components/HeadItem.vue';
// import BackgroundWall from '@/components/BackgroundWall';
import Wall from '@/components/Wall.vue';
import Ring from '@/components/Ring.vue';
export default {
  name: 'my',
  components: {
     Item,
    //  BackgroundWall,
     Wall,
     Ring,
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
      // 获取注册过 ref 的所有组件或元素
      // 找到 ref='childAct' 的组件
      this.$refs.childAct.fatherUse();
      // 除了可以调用子组件的方法还可以修改数据
      this.$refs.childAct.alt = "背景图不见了"
    }
  },
}
</script>
<style>
</style>
