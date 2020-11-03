<template>
  <div>
      <app-header></app-header>
      <div class="home-body">
        <home-flow></home-flow>       
        <app-player></app-player>
        <app-recently-played></app-recently-played>
        <app-categories></app-categories>
        <app-songs></app-songs>
        <app-artists></app-artists>
      </div>
  </div>
</template>

<script>
import AppHeader from '../components/header.vue'
import HomeFlow from '../components/flow.vue'
import AppPlayer from '../components/player.vue'
import AppCategories from '../components/categories.vue'
import AppSongs from '../components/songs.vue'
import AppArtists from '../components/artists.vue'
import AppRecentlyPlayed from '../components/recentlyplayed.vue'

export default {
  components: {
      AppHeader,
      HomeFlow,
      AppPlayer,
      AppCategories,
      AppSongs,
      AppArtists,
      AppRecentlyPlayed
  }
}
</script>

<style>
.home-body{
  height: 100%;
  background-color: #161A1A;
  padding: 0px 150px;
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
