import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

require('@/assets/styles/style.css')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
