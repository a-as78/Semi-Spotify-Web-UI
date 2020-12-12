import {song} from "./song"
import {auth} from "./auth"
import {playlist} from "./playlist"

export const store = new Vuex.Store({
    modules:[ 
        song,
        auth,
        playlist
    ]
})