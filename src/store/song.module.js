import { SongsService } from "@/common/api.service";
import {
    FETCH_SONG,
    FETCH_SONG_FILE
} from "./actions.type"
import {
    SET_SONG
} from "./mutations.type"

const state = {
    song: {
      name: "",
      artistName: "",
      albumName: "",
      releaseDate: 0,
      photo: "", 
      filePath: ""
    }
  };
  
const getters = {
    song(state){
        return state.song;
    }
};

const actions = {
    async [FETCH_SONG](context, songId){
        const { data } = await SongsService.get(songId);
        context.commit(SET_SONG, data);
        return data;
    },
    async [FETCH_SONG_FILE](){
        const data = await SongsService.getFile(43);
        // context.commit(SET_SONG, data);
        console.log("dataaa", data.data)
        return data.data;
    },
    // async [FETCH_SONG_IMAGE](context, playlistId){
    //     const { data } = await SongsService.get(playlistId);
    //     // context.commit(SET_SONG, data);
    //     return data;
    // }
}

const mutations = {
    [SET_SONG](state , song){
        state.song = song;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}