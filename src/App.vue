<template>
  <div id="app">
    <div class="foot">
      <ul>
        <li>
          <!-- <router-link to="/"> -->
          <a @click="goto('/')" :class="'/' === $route.path ? 'active' : ''">
          <i class="iconfont iconshouye r"></i>
            <span class="r">首页</span>
          </a>
          <!-- </router-link> -->
        </li>
        
        <li>
          <a @click="goto('/about')" :class="'/about' === $route.path ? 'active' : ''">
          <i class="iconfont iconshuju g"></i>
            <span class="g">数据</span>
          </a>
        </li>
        <li>
          <a @click="goto('/info')" :class="'/info' === $route.path ? 'active' : ''">
            <i class="iconfont iconditudangqianweizhi p"></i>
            <span class="p">地图</span>
          </a>
        </li>
        <li>
          <a @click="goto('/my')" :class="'/my' === $route.path ? 'active' : ''">
          <i class="iconfont iconaccount y"></i>
            <span class="y">个人</span>
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
      // this.$router.replace(path);
      this.$router.push(path)
      // 1.this.$router.push()
      // 描述：跳转到不同的url，但这个方法会向history栈添加一个记录，点击后退会返回到上一个页面。
      // 2.this.$router.replace()
      // 描述：同样是跳转到指定的url，但是这个方法不会向history里面添加新的记录，点击返回，会跳转到上上一个页面。上一个记录是不存在的。
      // 3.this.$router.go(n)
      // 相对于当前页面向前或向后跳转多少个页面,类似 window.history.go(n)。n可为正数可为负数。正数返回上一个页面
    },
    // 为子组件提供方法
    sonUse(text=''){
      console.log(text);
    },
  },
};
</script>

<style scoped>
@import url('http://at.alicdn.com/t/font_1308522_59nnsdmn8g9.css');
/* @import url('//at.alicdn.com/t/font_1308522_ghqupjiamxr.css'); */
/* 上面的写法打完包后报错(GET file://at.alicdn.com/t/font_1308522_ghqupjiamxr.css net::ERR_FILE_NOT_FOUND) */
  *{
    margin: 0px;
    padding: 0px;
    border: 0px;
  }
  .active>.g{
    color: #00d4cc;
  }

  .active>.p{
    color: #db15dc;
  }

  .active>.y{
    color: #e6ac23;
  }

  .active>.r{
    color: #d40000;
  }

  .foot{
    z-index:1000;
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
