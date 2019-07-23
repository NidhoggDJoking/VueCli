<template>
  <div class="about">
    <MItem :member="member"></MItem>
  </div>
</template>
<script>
import MItem from '@/components/MemberItem.vue';
export default {
  name: 'info',
  components: {
     MItem,
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
