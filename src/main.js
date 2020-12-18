import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router.js'
import store from './store/index.js'
import ApiService from "./common/api.service";

// import { CHECK_AUTH } from "./store/actions.type";

import "./plugins/validation";

require('@/assets/styles/style.scss')
require('@/assets/styles/rest.scss')

Vue.config.productionTip = false
ApiService.init()

// router.beforeEach((to, from, next) => {

  // console.log(from)
  // console.log(to)
  // if (to.name !== 'signup') {
  //   try{
  //     console.log("redirect called")
  //     next({name: 'signup'})
  //   } catch(error){
  //     console.log("error" , error)
  //   }
  // }


  // if (to.name === 'signup') {
  //   console.log('here')
  //   next({name: 'home'})
  // } else next
  // next({ name: 'home' })
  // await store.dispatch(CHECK_AUTH)
  // console.log('hello')
  // const isAuthenticated = store.getters.isAuthenticated
  // console.log('is auth', isAuthenticated)
  // if ((to.name !== 'signup' || to.name !== 'login') && !isAuthenticated){
  //   next({ name: 'signup' })
  // }
  // }else if((to.name === 'signup' || to.name === 'login') && isAuthenticated){
  //   next({ name: 'home' })
  // }
  // else next
// });

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

Vue.use(VueAxios, axios)
