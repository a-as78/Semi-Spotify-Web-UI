<template>
  <div>
      <app-header></app-header>
      <div class="home-body">
        <home-flow></home-flow>       
        <app-player></app-player>
        <app-categories>jrk</app-categories>
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

export default {
  components: {
      AppHeader,
      HomeFlow,
      AppPlayer,
      AppCategories,
      AppSongs,
      AppArtists
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
</style>
