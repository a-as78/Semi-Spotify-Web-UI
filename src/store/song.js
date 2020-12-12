import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const song = new Vuex.Store({
    state: {
        songs: [
            {
              title: "Rhiannon",
              artist: "Flleetwood Mac",
              album: "Fleetwood Mac",
              duration: "5:53"
            },
            {
              title: "Rhiannon",
              artist: "Flleetwood Mac",
              album: "Fleetwood Mac",
              duration: "5:53"
            },
            {
              title: "Rhiannon",
              artist: "Flleetwood Mac",
              album: "Fleetwood Mac",
              duration: "5:53"
            },
            {
              title: "Rhiannon",
              artist: "Flleetwood Mac",
              album: "Fleetwood Mac",
              duration: "5:53"
            },
            {
              title: "Rhiannon",
              artist: "Flleetwood Mac",
              album: "Fleetwood Mac",
              duration: "5:53"
            },
            {
              title: "Rhiannon",
              artist: "Flleetwood Mac",
              album: "Fleetwood Mac",
              duration: "5:53"
            },
            {
              title: "Rhiannon",
              artist: "Flleetwood Mac",
              album: "Fleetwood Mac",
              duration: "5:53"
            },
            {
              title: "Rhiannon",
              artist: "Flleetwood Mac",
              album: "Fleetwood Mac",
              duration: "5:53"
            },
            {
              title: "Rhiannon",
              artist: "Flleetwood Mac",
              album: "Fleetwood Mac",
              duration: "5:53"
            },
            {
              title: "Rhiannon",
              artist: "Flleetwood Mac",
              album: "Fleetwood Mac",
              duration: "5:53"
            },
            {
              title: "Rhiannon",
              artist: "Flleetwood Mac",
              album: "Fleetwood Mac",
              duration: "5:53"
            },
            {
              title: "Rhiannon",
              artist: "Flleetwood Mac",
              album: "Fleetwood Mac",
              duration: "5:53"
            }
        ]
    },
    getters: {
        songs: (state) => {
            return state.songs
        }
    }
});