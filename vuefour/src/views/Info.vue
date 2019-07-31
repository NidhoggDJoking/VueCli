<template>
  <div class="about">
    <Map></Map>
    <MItem :member="member" @rou="goto"></MItem>
  </div>
</template>
<script>

import MItem from '@/components/MemberItem.vue';
import Map from '@/components/BaiduMap.vue';
import Js from '@/js/base.js';
export default {
  name: 'info',
  components: {
     MItem,
     Map,
  },
  data() {
    return {
      member:[{icon:"iconViewGallery",text:"列表一",path:""},
              {icon:"iconclock",text:"列表二",path:""},
              {icon:"iconCategory",text:"列表三",path:""}
             ]
    }
  },
   methods: {
    goto(path) {
      console.log('点击成功!');
      this.$router.replace(path);
    }
  },
  created(){
    // this.$router.replace();
    Js('局部导入');
    this.Js('全局导入');
  }
}
</script>
<style>

</style>
