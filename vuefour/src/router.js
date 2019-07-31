import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';


Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/info',
      name: 'info',
      component: () => import(/* webpackChunkName: "info" */'./views/Info.vue'),
      meta: {
        requireAuth: true,  
        // 添加该字段，表示进入这个路由是需要登录的
        keepAlive: true, 
        //此组件需要被缓存
      },
    },
    {
      path: '/my',
      name: 'my',
      component: () => import(/* webpackChunkName: "my" */'./views/My.vue'),
    },
    {
      path: '/Other/UI',
      name: 'ui',
      component: () => import(/* webpackChunkName: "my" */'./views/Other/UI.vue'),
    },
  ],
});
