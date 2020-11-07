<template>
    <div class="home-body">
      <home-flow></home-flow>       
      <app-recently-played :recentlyPlayed="recentlyPlayed"></app-recently-played>
      <app-categories></app-categories>
      <app-songs :title='productiveTitle'
                 :viewAll="false"
                 :playlist="true"
                 :header="true"
                 :songs="productive"></app-songs>
      <app-songs :viewAll="false"
                 :title="playlistTitle"
                 :playlist="true"
                 :header="true"
                 :songs="playlists"></app-songs>
      <app-songs :title='songsTitle'
                 :songs='song'
                 :viewAll="true"
                 :header="true"></app-songs>
      <app-artists :header="true"
                   :artists="artist"></app-artists>
    </div>
</template>

<script>
import HomeFlow from '../components/flow.vue'
import AppCategories from '../components/categories.vue'
import AppSongs from '../components/songs.vue'
import AppArtists from '../components/artists.vue'
import AppRecentlyPlayed from '../components/recentlyplayed.vue'

export default {
  components: {
      HomeFlow,
      AppCategories,
      AppSongs,
      AppArtists,
      AppRecentlyPlayed
  },
  data(){
    return{
      recentlyPlayed: [
        {
          artist: true,
          name: 'Queen',
          url: require('../assets/Images/Mask Group 228.png'),
          detail: "111"
        },
        {
          playlist: true,
          name: "70s Rock Anthems Radio",
          url: require('../assets/Images/PLAYLIST RADIO.png'),
          detail: "222"
        },
        {
          playlist: true,
          name: "Progressive Rock",
          url: require('../assets/Images/PROG ROCK.png'),
          detail: "222"

        },
        {
          playlist: true,
          name: "StarTalk Radio",
          url: require('../assets/Images/Image 591.png'),
          detail: "333"
        },
        {
          playlist: true,
          name: "70s Rock Anthems",
          url: require('../assets/Images/70s ROCK.png'),
          detail: "444"
        },
        {
          song: true,
          name: "The Next Day",
          url: require('../assets/Images/Mask Group 248.png'),
          detail: 'sdsax'
        }
      ],
      productiveTitle: "Make monday more producitve",
      productive: [
        {
          name: "Deep Focus",
          url: require("../assets/Images/Deep Focus.png"),
          detail: "4234"
        },
        {
          name: "Productive Morning",
          url: require("../assets/Images/Productive Morning.png"),
          detail: "5136"
        },
        {
          name: "White Noise",
          url: require("../assets/Images/White Noise.png"),
          detail: "2545"
        },
        {
          name: "Nature Song",
          url: require("../assets/Images/Nature.png"),
          detail: "52652"
        },
        {
          name: "Brain Food",
          url: require("../assets/Images/Brain Food.png"),
          detail: "525562"
        },
        {
          name: "Morning Rush",
          url: require("../assets/Images/Morning Rush.png"),
          detail: "25235"
        }
      ],
      playlistTitle: "Playlist Picks",
      playlists: [
        {
          name: "Russian Composers",
          url: require("../assets/Images/COMPOSERS.png"),
          detail: "42525"
        },
        {
          name: "Guitar Solos",
          url: require("../assets/Images/GUITAR SOLOS.png"),
          detail: "42525"
        },
        {
          name: "Workout Rock",
          url: require("../assets/Images/WORKOUT rock.png"),
          detail: "42525"
        },
        {
          name: "Rock Ballads",
          url: require("../assets/Images/ROCK ballads.png"),
          detail: "42525"
        },
        {
          name: "80s Alternative",
          url: require("../assets/Images/80s alternative rock.png"),
          detail: "42525"
        },
        {
          name: "Rockabilly",
          url: require("../assets/Images/ROCKABILLY.png"),
          detail: "42525"
        }
      ],
      songsTitle: "New releases for you",
      song: [
        {
          name: "LPS",
          url: require("../assets/Images/Image 418.png"),
          detail: "safc sa"
        },
        {
          name: "Numb Numb Juice",
          url: require("../assets/Images/Image 419.png"),
          detail: "vad av"
        },
        {
          name: "Drip or Down 2",
          url: require("../assets/Images/Image 693.png"),
          detail: "badb ad "
        },
        {
          name: "Shadows",
          url: require("../assets/Images/Image 695.png"),
          detail: "gbvsav da v"
        },
        {
          name: "Don't Feed the Pop Monster",
          url: require("../assets/Images/Image 696.png"),
          detail: "gsafvcs "
        },
        {
          name: "HEF",
          url: require("../assets/Images/Mask Group 237.png"),
          detail: "gsav safv"
        }
      ],
      artist: [
        {
          name: "name",
          url: require("../assets/Images/Mask Group 305.png"),
          detail: "21323"
        },
        {
          name: "name",
          url: require("../assets/Images/Mask Group 321.png"),
          detail: "21323"
        },
        {
          name: "name",
          url: require("../assets/Images/The Velvet Underground.png"),
          detail: "21323"
        },
        {
          name: "name",
          url: require("../assets/Images/Lou Reed.png"),
          detail: "21323"
        },
        {
          name: "name",
          url: require("../assets/Images/Kurt.png"),
          detail: "21323"
        },
        {
          name: "name",
          url: require("../assets/Images/Bowie.png"),
          detail: "21323"
        }
      ],
      playlist: true
    }
  }
}
</script>

<style lang="scss" scoped>
.home-body{
  height: 100%;
  background-color: #161A1A;
  padding: 0px 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
app-header{
  position: fixed;
  top: 0;
}
home-flow{
  padding-top: 50px;
}
app-categories{
  width: 100%;
}
</style>
