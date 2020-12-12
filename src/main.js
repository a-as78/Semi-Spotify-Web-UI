import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router.js'
import { songStore } from './store/song';


require('@/assets/styles/style.scss')
require('@/assets/styles/rest.scss')

Vue.config.productionTip = false

new Vue({
  store: songStore,
  render: h => h(App),
  router
}).$mount('#app')

Vue.use(VueAxios, axios)
