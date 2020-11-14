import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

require('@/assets/styles/style.scss')
require('@/assets/styles/rest.scss')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
