import Home from './views/home.vue'
import genreAndMood from './views/genreAndMood.vue'
import GenreOverview from './views/genreOverview.vue';
import MyPlaylist from './views/myPlaylist.vue';
import Playlist from './views/playlist.vue';
import SignUp from './views/signUp.vue';
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'history',
    routes: [
        {path:"/" , component: Home, name: "home"},
        {path:"/genreandmood" , component: genreAndMood},
        {path:"/genreoverview" , component: GenreOverview},
        {path:"/myplaylist" , component: MyPlaylist},
        {path:"/playlist" , component: Playlist}, 
        {path:"/signup" , component: SignUp}    
    ]
})
  
export default router