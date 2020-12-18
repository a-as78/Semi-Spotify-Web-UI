import Vue from "vue";
import Vuex from "vuex";

// import home from "./home.module";
import auth from "./auth.module";
import playlist from "./playlist.module";
import song from "./song.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // home,
    auth,
    playlist,
    song
  },
  state: {
    currentSong: {
      photo: "",
      name: "",
      artistName: "",
      filePath: ""
    }
  },
  getters: {
    currentSong(){
      return JSON.parse(window.localStorage.getItem("song"));
    }
    // currentSong(state){
    //   return state.currentSong;
    // }
  },
  mutations: {
    setCurrentSong(state , song){
      state.currentSong = song;
      window.localStorage.setItem("song", JSON.stringify(song));
    }
  }
});
