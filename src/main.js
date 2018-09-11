import Vue from 'vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons'

import App from './App.vue'

Vue.use(ElementUI);
Vue.component('v-icon', Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
