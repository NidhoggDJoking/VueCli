import Vue from 'vue';
import VueResourse from 'vue-resource';
import App from './App.vue';
import router from './router';
import store from './store';
import './css/base.css';
import Js from '@/js/base.js';
Vue.prototype.Js = Js;
// vue-resource` import should occur before import of `./App.vue`

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
  console.log("进过拦截器 了");
  next()
})