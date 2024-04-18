import Vue from 'vue'
import VueHead from 'vue-head'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import LoadScript from 'vue-plugin-load-script';





Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueHead);
Vue.use(LoadScript);


new Vue({
  router,
  render: h => h(App),
 //store
}).$mount('#app')
