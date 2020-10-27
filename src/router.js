import Home from './views/home.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'history',
    routes: [
        {path:"/" , component: Home}
    ]
})
  
export default router