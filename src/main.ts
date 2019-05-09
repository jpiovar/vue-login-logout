import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import store from './stores';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
