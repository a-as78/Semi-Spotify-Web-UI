<template>
    <div class="home-body">
      <home-flow></home-flow>       
      <app-recently-played :recentlyPlayed="recentlyPlayed"></app-recently-played>
      <app-categories></app-categories>
      <app-songs :title='productive'
                 :names='productiveName'
                 :viewAll="false"
                 :playlist="true"
                 :header="true"
                 :urls='productiveUrl'></app-songs>
      <app-songs :title='playlists'
                 :names='playlistName'
                 :viewAll="false"
                 :playlist="true"
                 :header="true"
                 :urls='playlistUrl'></app-songs>
      <app-songs :title='realeased'
                 :names='songsName'
                 :viewAll="true"
                 :header="true"
                 :urls='songsUrl'></app-songs>
      <app-artists :header="true"
                   :artisturl="artisturl"></app-artists>
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
        // {
        //   artist: true,
        //   name: 'Queen',
        //   url: '../assets/Images/Image 591.png'
        // },
        {
          playlist: true,
          name: ["70s Rock Anthems Radio"],
          url: [
            '../assets/Images/70s ROCK.png'
          ]
        },
        {
          playlist: true,
          name: "",
          url: ""
        },
        {
          playlist: true,
          name: "",
          url: ""
        },
        {
          playlist: true,
          name: "",
          url: ""
        },
        {
          song: true,
          name: ["The Next Day"],
          url: [
            '../assets/Images/Mask Group 248.png'
          ]
        }
      ],
      productiveUrl: [
        require("../assets/Images/Deep Focus.png"),
        require("../assets/Images/White Noise.png"),
        require("../assets/Images/Nature.png"),
        require("../assets/Images/Productive Morning.png"),
        require("../assets/Images/Brain Food.png"),
        require("../assets/Images/Morning Rush.png")
      ],
      productiveName:[
        'Deep Focus',
        'Productive Morning',
        'White Noise',
        'Nature Song',
        "Brain Food",
        'Morning Rush'
      ],
      playlistUrl: [
        require("../assets/Images/80s alternative rock.png"),
        require("../assets/Images/GUITAR SOLOS.png"),
        require("../assets/Images/ROCK ballads.png"),
        require("../assets/Images/ROCKABILLY.png"),
        require("../assets/Images/WORKOUT rock.png"),
        require("../assets/Images/COMPOSERS.png")
      ],
      playlistName:[
        'Russian Composers',
        'Guitar Solos',
        'Workout Rock',
        'Rock Ballads',
        "80s Alternative",
        'Rockabilly'
      ],
      songsUrl: [
        require("../assets/Images/Image 418.png"),
        require("../assets/Images/Image 419.png"),
        require("../assets/Images/Image 693.png"),
        require("../assets/Images/Image 695.png"),
        require("../assets/Images/Image 696.png"),
        require("../assets/Images/Mask Group 237.png")
      ],
      songsName:[
        'LPS',
        'Numb Numb Juice',
        'Drip or Down 2',
        'Shadows',
        "Don't Feed the Pop Monster",
        'HEF'
      ],
      artisturl: [
        require("../assets/Images/Mask Group 305.png"),
        require("../assets/Images/Mask Group 321.png"),
        require("../assets/Images/The Velvet Underground.png"),
        require("../assets/Images/Lou Reed.png"),
        require("../assets/Images/Kurt.png"),
        require("../assets/Images/Bowie.png")
      ],
      productive:"Make monday more producitve",
      playlists: "Playlists picks",
      realeased: "New releases for you",
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
