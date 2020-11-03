<template>
  <div class="recently-played">
      <div class="header">
          <div class="title"></div>
          <div class="option"></div>
      </div>
      <div class="body">
          <app-artists></app-artists>
          <!-- <app-songs></app-songs>
          <app-songs></app-songs>
          <app-songs></app-songs>
          <app-songs></app-songs> -->
      </div>
      
  </div>
</template>

<script>
import AppArtists from '../components/artists.vue'
// import AppSongs from '../components/songs.vue'

export default {
  components: {
    //   AppSongs,
    AppArtists
  }
}
</script>

<style lang="scss" scoped>

</style>
