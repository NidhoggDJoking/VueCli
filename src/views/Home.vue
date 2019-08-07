<template>
  <div class="home">
    <Swiper :banner="banner"/>
    <NavItem></NavItem>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from '@/components/Swiper.vue';
import NavItem from '@/components/NavItem.vue';
export default {
  name: 'home',
  components: {
    Swiper,
    NavItem,
  },
  data(){
    return{
        banner:[
          {url:'http://baidu.com',image:require("../image/Swiper/001.jpg")},
          {url:'https://www.jianshu.com',image:require("../image/Swiper/002.jpg")},
          {url:'https://juejin.im/timeline',image:require("../image/Swiper/003.jpg")},
          {url:'https://www.csdn.net',image:require("../image/Swiper/004.jpg")},
          {url:'https://www.w3cschool.cn',image:require("../image/Swiper/005.jpg")},
          {url:'https://www.bilibili.com/',image:require("../image/Swiper/006.jpg")}
        ] 
    }
},
  created() {
      document.title = 'Home'
      // Vuejs 单页应用在iOS系统下部分APP的webview中 标题不能通过 document.title = xxx 的方式修改
      // 使用插件 vue-wechat-title
    },
  mounted() {
      // 本地存储要写在mounted生命周期之后
      sessionStorage.setItem("Nidhogg", "Joking");
      localStorage .setItem("Egoist", "Inori");
    },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next(vm => {
    // 通过 `vm` 访问组件实例,直接写next()没用
  })
  },
  // beforeRouteUpdate (to, from, next) {
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  // },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    const answer = window.confirm('路由离开')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
};
</script>
