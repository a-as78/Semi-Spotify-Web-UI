import Home from './views/home.vue'
import genreAndMood from './views/genreAndMood.vue'
import GenreOverview from './views/genreOverview.vue';
import MyPlaylist from './views/myPlaylist.vue';
import Playlist from './views/playlist.vue';
import CreatedPlaylist from './views/createdPlaylist.vue';
import SignUp from './views/signUp.vue';
import LogIn from './views/logIn.vue';


import PopupTest from './components/createPlaylistPopup.vue';
import PopupTest2 from './components/createSongPopup.vue';


import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            path:"/" , 
            component: Home, 
            name: "home"
        },
        {
            path:"/genreandmood" , 
            component: genreAndMood
        },
        {
            path:"/genreoverview" , 
            component: GenreOverview
        },
        {
            path:"/myplaylist" , 
            component: MyPlaylist
        },
        {
            path:"/playlist" , 
            component: Playlist
        }, 
        {
            path:"/createdplaylist" , 
            component: CreatedPlaylist
        }, 


        {
            path:"/test" , 
            component: PopupTest
        }, 
        {
            path:"/test2" , 
            component: PopupTest2
        }, 



        {
            path:"/signup" , 
            component: SignUp, 
            name: "signup"
        },
        {
            path:"/login" , 
            component: LogIn, 
            name: "login"
        }    
    ]
})
  
export default router