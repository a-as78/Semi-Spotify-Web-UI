<template>
  <div class="recently-played row-flex">
      <div class="header">
          <div class="title"></div>
          <div class="option"></div>
      </div>
      <div class="row-flex itmes"
           v-for="(item, index) in recentlyPlayed"
           :key="index">
           <app-artist v-if="item.artist"
                        :artist="item"
                        class="item">
            </app-artist>
           <app-song v-if="item.playlist"
                      :playlist="true"
                      :song="item"
                      class="item">
            </app-song>
           <app-song v-if="item.song"
                      :song="item"
                      class="item">
            </app-song>
      </div>
      
  </div>
</template>

<script>
import AppArtist from '../components/artist.vue'
import AppSong from '../components/song.vue'

export default {
  components: {
    AppSong,
    AppArtist
  },
  props: [
    'recentlyPlayed'
  ],
  created(){
    // console.log("recently played" , this.recentlyPlayed)
  }
}
</script>

<style lang="scss" scoped>
.body{
  width: 100%;
  justify-content: space-between;
}
.recently-played{
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.items{
  justify-content: space-between;
}
.item{
  min-width: 100px;
  padding: 0px 10px;
}
</style>
