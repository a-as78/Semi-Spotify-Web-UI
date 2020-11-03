<template>
    <div class="home-body">
      <home-flow></home-flow>       
      <app-recently-played></app-recently-played>
      <app-categories></app-categories>
      <app-songs :title='productive'
                 :viewAll="false"
                 :playlist="true"
                 :header="true"
                 :urls='productiveUrl'></app-songs>
      <app-songs :title='playlists'
                 :viewAll="false"
                 :playlist="true"
                 :header="true"
                 :urls='playlistUrl'></app-songs>
      <app-songs :title='realeased'
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
      productiveUrl: [
        require("../assets/Images/Brain Food.png"),
        require("../assets/Images/Deep Focus.png"),
        require("../assets/Images/Morning Rush.png"),
        require("../assets/Images/Nature.png"),
        require("../assets/Images/Productive Morning.png"),
        require("../assets/Images/White Noise.png")
      ],
      playlistUrl: [
        require("../assets/Images/Image 418.png"),
        require("../assets/Images/Image 419.png"),
        require("../assets/Images/Image 693.png"),
        require("../assets/Images/Image 695.png"),
        require("../assets/Images/Image 696.png"),
        require("../assets/Images/Mask Group 237.png")
      ],
      songsUrl: [
        require("../assets/Images/Image 418.png"),
        require("../assets/Images/Image 419.png"),
        require("../assets/Images/Image 693.png"),
        require("../assets/Images/Image 695.png"),
        require("../assets/Images/Image 696.png"),
        require("../assets/Images/Mask Group 237.png")
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
*{
}
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
