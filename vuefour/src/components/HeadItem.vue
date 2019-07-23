<template>
    <div class="item">
        <div class="icon" @click="back()"><i class="iconfont iconfanhui1"></i></div>
        <div class="tit">{{tit}}</div>
        <div class="icon"><i class="iconfont icondiandian"></i></div>
        
        
    </div>
</template>
<script>
export default {
  props: {
    tit: String,
  },
  methods: {
      back(){
        // this.$router.back(-1);
        // this.$router.go(-1);
        // this.router.back();
    },
  },
}
</script>
<style scoped>
@import url('//at.alicdn.com/t/font_1308522_mr1q0klc2dk.css');
    .item{
        width: 100%;
        height: 2.5rem;
        background-color: #fff;
        box-shadow: 0px 0px 5px 1px #d4d4d4;
        display: flex;
        justify-content: space-between;
    }
    .icon{
        line-height: 2.5rem;
        margin:auto 10px;
    }
    .tit{
        line-height: 2.5rem;
        color: 16px;
    }
</style>
