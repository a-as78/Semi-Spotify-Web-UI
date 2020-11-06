<template>
    <div class="home-body">
      <home-flow></home-flow>       
      <app-recently-played :recentlyPlayed="recentlyPlayed"></app-recently-played>
      <app-categories></app-categories>
      <app-songs :title='productive.title'
                 :names='productive.name'
                 :viewAll="false"
                 :playlist="true"
                 :header="true"
                 :urls='productive.url'
                 :detail="productive.detail"></app-songs>
      <app-songs :title='playlists.title'
                 :names='playlists.name'
                 :viewAll="false"
                 :playlist="true"
                 :header="true"
                 :urls='playlists.url'
                 :detail="playlists.detail"></app-songs>
      <app-songs :title='songs.title'
                 :names='songs.name'
                 :viewAll="true"
                 :header="true"
                 :urls='songs.url'
                 :detail="songs.detail"></app-songs>
      <app-artists :header="true"
                   :urls="artist.name"
                   :names="artist.url"
                   :detail="artist.detail"></app-artists>
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
          name:[ 'Queen'],
          url: [
            require('../assets/Images/Mask Group 228.png')
          ],
          detail: ["111"]
        },
        {
          playlist: true,
          name: ["70s Rock Anthems Radio"],
          url: [
            require('../assets/Images/PLAYLIST RADIO.png')
          ],
          detail: ["222"]
        },
        {
          playlist: true,
          name: ["Progressive Rock"],
          url: [
            require('../assets/Images/PROG ROCK.png')
          ],
          detail: ["222"]

        },
        {
          playlist: true,
          name: ["StarTalk Radio"],
          url: [
            require('../assets/Images/Image 591.png')
          ],
          detail: ["333"]
        },
        {
          playlist: true,
          name: ["70s Rock Anthems"],
          url: [
            require('../assets/Images/70s ROCK.png')
          ],
          detail: ["444"]
        },
        {
          song: true,
          name: ["The Next Day"],
          url: [
            require('../assets/Images/Mask Group 248.png')
          ],
          detail: ['sdsax']
        }
      ],
      productive: {
        title: "Make monday more producitve",
        url: [
          require("../assets/Images/Deep Focus.png"),
          require("../assets/Images/White Noise.png"),
          require("../assets/Images/Nature.png"),
          require("../assets/Images/Productive Morning.png"),
          require("../assets/Images/Brain Food.png"),
          require("../assets/Images/Morning Rush.png")
        ],
        name: [
          'Deep Focus',
          'Productive Morning',
          'White Noise',
          'Nature Song',
          "Brain Food",
          'Morning Rush'
        ],
        detail: [
          "244,412",
          "244,412",
          "244,412",
          "244,412",
          "244,412",
          "244,412"
        ]
      },
      playlists: {
        title: "Playlists picks",
        url: [
          require("../assets/Images/80s alternative rock.png"),
          require("../assets/Images/GUITAR SOLOS.png"),
          require("../assets/Images/ROCK ballads.png"),
          require("../assets/Images/ROCKABILLY.png"),
          require("../assets/Images/WORKOUT rock.png"),
          require("../assets/Images/COMPOSERS.png")
        ],
        name: [
          'Russian Composers',
          'Guitar Solos',
          'Workout Rock',
          'Rock Ballads',
          "80s Alternative",
          'Rockabilly'
        ],
        detail: [
          "71,622",
          "71,622",
          "71,622",
          "71,622",
          "71,622",
          "71,622"
        ]
      },
      songs: {
        title: "New releases for you",
        url: [
          require("../assets/Images/Image 418.png"),
          require("../assets/Images/Image 419.png"),
          require("../assets/Images/Image 693.png"),
          require("../assets/Images/Image 695.png"),
          require("../assets/Images/Image 696.png"),
          require("../assets/Images/Mask Group 237.png")
        ],
        name:[
          'LPS',
          'Numb Numb Juice',
          'Drip or Down 2',
          'Shadows',
          "Don't Feed the Pop Monster",
          'HEF'
        ],
        detail: [
          'aaaa',
          'aaaa',
          'aaaa',
          'aaaa',
          'aaaa',
          'aaaa'
        ]
      },
      artist: {
        url: [
          require("../assets/Images/Mask Group 305.png"),
          require("../assets/Images/Mask Group 321.png"),
          require("../assets/Images/The Velvet Underground.png"),
          require("../assets/Images/Lou Reed.png"),
          require("../assets/Images/Kurt.png"),
          require("../assets/Images/Bowie.png")
        ],
        name: [
          "name",
          "name",
          "name",
          "name",
          "name",
          "name"
        ],
        detail: [
          "21313",
          "21313",
          "21313",
          "21313",
          "21313",
          "21313"
        ]
      },
      // artisturl: [
      //   require("../assets/Images/Mask Group 305.png"),
      //   require("../assets/Images/Mask Group 321.png"),
      //   require("../assets/Images/The Velvet Underground.png"),
      //   require("../assets/Images/Lou Reed.png"),
      //   require("../assets/Images/Kurt.png"),
      //   require("../assets/Images/Bowie.png")
      // ],
      // productive:"Make monday more producitve",
      // playlists: "Playlists picks",
      // realeased: "New releases for you",
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
