<template>
<div>
    <div class="item" v-for="(item,index) in member" :key="index" @click="click(item.path)">
        <div style="display:flex">
            <div class="icon"><i class="iconfont" :class="item.icon"></i></div>
            <span class="tit" style="margin-left:10px">{{item.text}}</span>
        </div>  
        <div class="icon"><i class="iconfont iconjiantouyou"></i></div>
    </div>
</div>
</template>
<script>
import store from '@/store';

export default {
  store,
  props: {
    member: Array,
  },
  methods: {
      click(path) {
          console.log(path);
          store.commit('calculation');
          this.$emit('rou',path,'路由传值内容成功');
      },
  },
}
</script>
<style>
@import url('http://at.alicdn.com/t/font_1308522_ghqupjiamxr.css');
    .item{
        width: 100%;
        height: 2.5rem;
        background-color: #fff;
        box-shadow: 0px 0px 1px 1px #e2e2e2;
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
    }
    .icon{
        line-height: 2.5rem;
        margin:auto 10px;
    }
    .tit{
        line-height: 2.5rem;
        color: #313131;
        justify-content: flex-start;
    }
</style>
