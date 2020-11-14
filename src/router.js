import Home from './views/home.vue'
import genreAndMood from './views/genreAndMood.vue'
import GenreOverview from './views/genreOverview.vue';
import MyPlaylist from './views/myPlaylist.vue';
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'history',
    routes: [
        {path:"/" , component: Home},
        {path:"/genreandmood" , component: genreAndMood},
        {path:"/genreoverview" , component: GenreOverview},
        {path:"/myplaylist" , component: MyPlaylist}    
    ]
})
  
export default router