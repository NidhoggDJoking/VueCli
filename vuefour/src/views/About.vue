<template>
  <div class="about">
    <Item></Item>
    <Card></Card>
  </div>
</template>
<script>
import Item from '@/components/GoodsItem.vue';
import Card from '@/components/GoodsCard.vue';
export default {
  name: 'about',
  components: {
     Item,
     Card,
  },
}
</script>

<style scoped>


</style>
