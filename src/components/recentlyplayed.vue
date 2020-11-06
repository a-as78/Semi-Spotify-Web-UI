<template>
  <div class="recently-played row-flex">
      <div class="header">
          <div class="title"></div>
          <div class="option"></div>
      </div>
      <div v-for="(item, index) in recentlyPlayed"
           :key="index"
           class="body">
           <app-artists v-if="item.artist"
                        :artisturl="item.url"
                        :artistLikes="item.likes"></app-artists>
           <app-songs v-if="item.playlist"
                      :names='item.name'
                      :playlist="true"
                      :urls='item.url'
                      :detail="item.likes"></app-songs>
           <app-songs v-if="item.detail"
                      :names='item.name'
                      :urls='item.url'
                      :detail="item.detail"></app-songs>
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
.recently-played{
  justify-content: center;
  align-items: center;
}
</style>
