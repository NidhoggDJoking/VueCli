<template>
  <div class="about">
    <Map></Map>
    <MItem :member="member"></MItem>
  </div>
</template>
<script>
import MItem from '@/components/MemberItem.vue';
import Map from '@/components/BaiduMap.vue';
export default {
  name: 'info',
  components: {
     MItem,
     Map,
  },
  data() {
    return {
      member:[{icon:"iconViewGallery",text:"滚犊子",path:""},
              {icon:"iconclock",text:"傻孩子",path:""},
              {icon:"iconCategory",text:"大春哥",path:""}
             ]
    }
  },
}
</script>
<style>

</style>
