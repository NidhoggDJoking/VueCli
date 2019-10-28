import Vue from 'vue';
import VueResourse from 'vue-resource';
import App from './App.vue';
import router from './router';
import store from './store';
import './css/base.css';
import Js from '@/js/base.js';
import Calendar from 'vue-mobile-calendar'
// import Vant from 'vant';
// import 'vant/lib/index.css';
Vue.prototype.Js = Js;
// vue-resource` import should occur before import of `./App.vue`
Vue.use(require('vue-wechat-title'));
// Vuejs 单页应用在iOS系统下部分APP的webview中 标题不能通过 document.title = xxx 的方式修改 该插件只为解决该问题而生(兼容安卓)
Vue.use(VueResourse);
// Vue.use(Vant);
Vue.use(Calendar);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

// main.js;
// 页面跳转的拦截器;
// to:router即将进入的路由对象;
// from:当前导航即将离开的路由;
// next:Function,进行管道中的一个钩子，如果执行完了，则导航的状态就是 confirmed （确认的）；否则为false，终止导航。
router.beforeEach((to, from, next) => {
    // 在需要过滤的路由添加 requireAuth: true 如:info
    if (to.matched.some(record => record.meta.requireAuth)) {
        console.log("进过拦截器了");
        if (!sessionStorage.getItem('Nidhogg')) {
            alert("没有发现sessionStorage跳转至首页");
            next({
                path: '/',
                query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    next()
});

// 跳转后执行
router.afterEach((to, from) => {

})