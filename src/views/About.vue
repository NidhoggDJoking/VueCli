<template>
  <div class="about" v-wechat-title="$route.meta.title" img-set="@/assets/logo.png">
    <Load></Load>
    <h2>Axios:</h2>
    <Item></Item>
    <br/>
    <h2>vue-resource:</h2>
    <Card></Card>
  </div>
</template>
<script>
import Load from '@/components/HeadLoading.vue';
import Item from '@/components/GoodsItem.vue';
import Card from '@/components/GoodsCard.vue';
export default {
  name: 'about',
  components: {
     Item,
     Card,
     Load,
  },
}
</script>

<style scoped>


</style>
