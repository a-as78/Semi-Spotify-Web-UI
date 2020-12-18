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
            path:"/genre-and-mood" , 
            component: genreAndMood,
            name: 'genreAndMood'
        },
        {
            path:"/genre-overview" , 
            component: GenreOverview,
            name: 'genreOverview'
        },
        {
            path:"/my-playlist" , 
            component: MyPlaylist,
            name: 'myPlaylist'
        },
        {
            path:"/playlist/:id" , 
            component: Playlist,
            name: 'playlist'
        }, 
        {
            path:"/created-playlist" , 
            component: CreatedPlaylist,
            name: 'createdPlaylist'
        }, 
        {
            path:"/test" , 
            component: PopupTest,
            name: "test"
        }, 
        {
            path:"/test2" , 
            component: PopupTest2,
            name: "test2"
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