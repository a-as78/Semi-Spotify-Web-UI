import { PlaylistsService } from "@/common/api.service";
import {
    FETCH_PLAYLIST
} from "./actions.type"
import {
    SET_PLAYLIST
} from "./mutations.type"

const state = {
    playlist: {
      name: "",
      description: "",
      photo: "",
      count_song: 0,
      publishDate: ""
    }
  };
  
const getters = {
    playlist(state){
        return state.playlist;
    }
};

const actions = {
    async [FETCH_PLAYLIST]({ commit }, playlistId){
        const { data } = await PlaylistsService.get(playlistId);
        commit(SET_PLAYLIST, data);
        return data;
    },
    async createPlaylist({ commit }){
        const { data } = await PlaylistsService.post()
    }
}

const mutations = {
    [SET_PLAYLIST](state , playlist){
        state.playlist = playlist;
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}