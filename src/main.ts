import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import CustomFilters from './custom-filter'; 

// for message Bar to display the success, error message.
import 'node-snackbar/dist/snackbar.min.css';
import 'node-snackbar/dist/snackbar.min.js';

Vue.config.productionTip = false

CustomFilters.setup();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
