<template>
    <div class="home-body">
      <home-flow></home-flow>       
      <app-recently-played></app-recently-played>
      <app-categories></app-categories>
      <app-songs :songsUrl='songsUrl'></app-songs>
      <app-artists></app-artists>
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
      songsUrl: [
        require("../assets/Images/Image 418.png"),
        require("../assets/Images/Image 419.png"),
        require("../assets/Images/Image 693.png"),
        require("../assets/Images/Image 695.png"),
        require("../assets/Images/Image 696.png"),
        require("../assets/Images/Mask Group 237.png")
      ]
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
