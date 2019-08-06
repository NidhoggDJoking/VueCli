import Vue from 'vue';
import VueResourse from 'vue-resource';
import App from './App.vue';
import router from './router';
import store from './store';
import './css/base.css';
import Js from '@/js/base.js';
Vue.prototype.Js = Js;
// vue-resource` import should occur before import of `./App.vue`
Vue.use(require('vue-wechat-title'));
// Vuejs 单页应用在iOS系统下部分APP的webview中 标题不能通过 document.title = xxx 的方式修改 该插件只为解决该问题而生(兼容安卓)
Vue.use(VueResourse);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

// main.js
// 页面跳转的拦截器
router.beforeEach((to, from, next) => {
  console.log("进过拦截器了");
  next()
})