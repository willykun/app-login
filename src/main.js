import Vue from 'vue'
import App from './App.vue'
import bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import router from './router';
import store from './store'
import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.min.css';


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

Vue.use(VueIziToast);