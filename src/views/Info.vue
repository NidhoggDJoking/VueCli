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
      member:[
        {icon:"iconvuejs",text:"Vuex",path:"ui"},
        {icon:"iconCategory",text:"List",path:"list"},
        {icon:"iconerweima",text:"Qrcode",path:"qr"},
        {icon:"iconViewGallery",text:"Magic",path:"magic"},
        ]
    }
  },
    // 1.this.$router.push()
    // 描述：跳转到不同的url，但这个方法会向history栈添加一个记录，点击后退会返回到上一个页面。
    // 2.this.$router.replace()
    // 描述：同样是跳转到指定的url，但是这个方法不会向history里面添加新的记录，点击返回，会跳转到上上一个页面。上一个记录是不存在的。
    // 3.this.$router.go(n)
    // 相对于当前页面向前或向后跳转多少个页面,类似 window.history.go(n)。n可为正数可为负数。正数返回上一个页面
   methods: {
    goto(pathName,text='') {
      console.log('点击成功!');
      console.log('路由的值' + pathName);
      // this.$router.replace(path);

      //成功传值方法
      this.$router.push({
          name: pathName,
          params: {
            text: text
          }
        })
    },
  },
  created(){
    // this.$router.replace();
    Js('局部导入');
    this.Js('全局导入')
  }
}
</script>
<style>

</style>
