<template>
    <div class="item">
        <div class="icon" @click="back()"><i class="iconfont iconfanhui1"></i></div>
        <div class="tit">{{tit}}</div>
        <div class="icon" @click="settin()"><i class="iconfont icondiandian"></i></div>
    </div>
</template>
<script>
export default {
  props: {
    tit: String,
  },
  methods: {
      back(){
        // console.log('子组件——按钮点击');
        // this.$router.back(-1);
        // this.$router.go(-1);
        // this.$router.back();
        this.$emit('back');
    },
    settin(){
        this.$emit('settin');
    }
  },
}
</script>
<style scoped>
@import url('http://at.alicdn.com/t/font_1308522_59nnsdmn8g9.css');
    .item{
        width: 100%;
        height: 2.5rem;
        background-color: #fff;
        box-shadow: 0px 0px 5px 1px #d4d4d4;
        display: flex;
        justify-content: space-between;
        margin-bottom:0px;
    }
    .icon{
        line-height: 2.5rem;
        margin:auto 10px;
    }
    .tit{
        line-height: 2.5rem;
        color: 16px;
    }
    .icondiandian{
        font-size: 18px;
    }
</style>