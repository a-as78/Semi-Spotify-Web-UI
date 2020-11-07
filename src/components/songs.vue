<template>
  <div class="songs column-flex">
    <component-header v-if="header"
                      :title="title"
                      :viewAll="viewAll"></component-header>
    <div class="songs-body row-flex">
      <div class="song column-flex"
            v-for="(song, index) in songs" 
           :key="index">
           <app-song :song="song"
                     :playlist="playlist"></app-song>
           </div>
    </div>
  </div>
</template>

<script>
import ComponentHeader from './componentHeader.vue';
import AppSong from './song.vue';

export default {
  components: {
    ComponentHeader,
    AppSong
  },
  props: {
    urls: Array,
    header: Boolean,
    playlist: Boolean,
    viewAll: Boolean,
    title: String,
    songs: Array
  },
  data(){
    return{
      // title: "New Releases for You"
    }
  }
}
</script>

<style lang="scss" scoped>
.songs{
  margin: 20px 0px;
  width: 100%;
  justify-content: space-between;
}
.songs-header{
  justify-content: space-between;
  margin: 10px;
  color: white;
  font-size: 22px;
  font-weight: 600;
}
.songs-body{
  overflow-y: hidden;
  overflow-x: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
/* Hide scrollbar for Chrome, Safari and Opera */
.songs-body::-webkit-scrollbar {
  display: none;
}
.view-all{
  color: #D5D5D5;
  font-size: 14px;
  font-weight: 100;
}
.song{
  width: 100%;
  margin: 10px;
}
.song-cover{
  width: 100%;
}
.song-name{
  color: white;
  font-size: 15px;
  padding-top: 7px;
}
.song-artist{
  color: #99999F;
  font-size: 13px;
  padding-top: 3px;
}
</style>