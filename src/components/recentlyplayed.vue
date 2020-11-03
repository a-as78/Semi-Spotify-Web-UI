<template>
  <div class="recently-played">
      <div class="header">
          <div class="title"></div>
          <div class="option"></div>
      </div>
      <div v-for="(item, index) in recentlyPlayed"
           :key="index"
           class="body">
           <app-artists v-if="item.artist"
                        :artisturl="item.url"></app-artists>
           <app-songs v-if="item.song"
                      :names='item.name'
                      :playlist="true"
                      :urls='item.url'></app-songs>
           <app-songs v-if="item.song"
                      :names='item.name'
                      :urls='item.url'></app-songs>
      </div>
      
  </div>
</template>

<script>
import AppArtists from '../components/artists.vue'
import AppSongs from '../components/songs.vue'

export default {
  components: {
    AppSongs,
    AppArtists
  },
  props: [
    'recentlyPlayed'
  ]
}
</script>

<style lang="scss" scoped>

</style>
