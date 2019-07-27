import Vue from 'vue';
import VueResourse from 'vue-resource';
import App from './App.vue';
import router from './router';
import store from './store';
import './css/base.css';
// vue-resource` import should occur before import of `./App.vue`
Vue.use(VueResourse);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
