<template>
  <div class="about">
    <h2>Axios:</h2>
    <Item></Item>
    <br/>
    <h2>vue-resource:</h2>
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
