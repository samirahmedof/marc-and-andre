import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/style.css';
import Vuelidate from 'vuelidate';
import { router } from './assets/js/router';
import { store } from './assets/js/store';

Vue.use(BootstrapVue);
Vue.use(Vuelidate);

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    if (store.getters.getIsLogged) {
      next('/');
    }
    else {
      next();
    }
  }
  else {
    if (!store.getters.getIsLogged) {
      next('/login');
    }
    else {
      next();
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
