<template>
  <div id="app">
    <div class="foot">
      <ul>
        <li>
          <a @click="goto('/')">
          <i class="iconfont iconxiaoxi r" :class="'/' === $route.path ? 'active' : ''"></i>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a @click="goto('/about')">
          <i class="iconfont iconcart g" :class="'/about' === $route.path ? 'active' : ''"></i>
            <span>About</span>
          </a>
        </li>
        <li>
          <a @click="goto('/info')">
            <i class="iconfont iconaixin p" :class="'/info' === $route.path ? 'active' : ''"></i>
            <span>Info</span>
          </a>
        </li>
        <li>
          <a @click="goto('/my')">
          <i class="iconfont iconaccount y" :class="'/my' === $route.path ? 'active' : ''"></i>
            <span>My</span>
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
    goto(path) {
      this.$router.replace(path);
    }
  },
};
</script>

<style scoped>
@import url('//at.alicdn.com/t/font_1308522_ghqupjiamxr.css');
  *{
    margin: 0px;
    padding: 0px;
    border: 0px;
  }
  .active.g{
    color: #00d4cc;
  }

  .active.p{
    color: #db15dc;
  }

  .active.y{
    color: #e2de2c;
  }

  .active.r{
    color: #d40000;
  }

  .foot{
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: #fff;
    box-shadow: -1px -5px 6px 0px #f1f1f1;
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
     margin-top: 2px
  }
  img{
    width: 20px;
    height: 20px;
    display: block;
    margin: 3px auto 0;
  }
</style>
