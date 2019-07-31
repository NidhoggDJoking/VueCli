<template>
  <div class="about">
    <Map></Map>
    <MItem :member="member"></MItem>
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
  created(){
    Js('局部导入');
    this.Js('全局导入');
  }
}
</script>
<style>

</style>
