import Home from './views/home.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'history',
    routes: [
        {path:"/" , component: Home}
})
  
export default router