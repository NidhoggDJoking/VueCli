<template>
  <div id="app">
    <div class="foot">
      <ul>
        <li>
          <a @click="goto('/')">
          <i class="iconfont iconicon-test"></i>
            <span>home</span>
          </a>
        </li>
        <li>
          <a @click="goto('/about')">
          <i class="iconfont iconxiaoxi"></i>
            <span>about</span>
          </a>
        </li>
        <li>
          <a>
            <i class="iconfont iconaixin"></i>
            <span>info</span>
          </a>
        </li>
        <li>
          <a>
          <i class="iconfont iconaccount"></i>
            <span>myde</span>
          </a>
        </li>
      </ul>
     
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    goto(path){
      this.$router.replace(path);
    }
  },
}
</script>

<style scoped>
@import url('//at.alicdn.com/t/font_1308522_9t9hj85kw8g.css');
  *{
    margin: 0px;
    padding: 0px;
    border: 0px;
  }
  .foot{
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: #fff;
    box-shadow: 1px -6px 5px 0px #dedede;
    height: 2.5rem;
    display: flex;
    justify-content:center;
    align-items:center;
  }
  ul{
    width: 100%;
    font-size: 0;
    background: #fff;
  }
  li{
    width: 25%;
    text-align: center;
    height: 43px;
    vertical-align: top;
    background: #fff;
    font-size: 0;
    float: left;
  }
  span{
    font-size: 12px;
    color: #7b7b7b;
  }
  .iconfont{
     font-size: 21px;
     display: block;
  }
  img{
    width: 20px;
    height: 20px;
    display: block;
    margin: 3px auto 0;
  }
</style>
