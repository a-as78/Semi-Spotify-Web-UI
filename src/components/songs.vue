<template>
  <div class="songs column-flex">
    <component-header v-if="header"
                      :title="title"
                      :viewAll="viewAll"></component-header>
    <div class="songs-body row-flex">
      <div class="song column-flex"
           v-for="(url, index) in urls" 
           :key="index">
        <img class="song-cover"
             :src= "url" 
             alt="cover">
        <div class="song-name">{{names[index]}}</div>
        <div class="row-flex">
          <div v-if="playlist"
               class="artist-like-icon">
            <img src="../assets/Icons/heart.svg" alt="like">
          </div>
          <div class="song-artist">{{detail[index]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentHeader from './componentHeader.vue';

export default {
  components: {
    ComponentHeader
  },
  props: {
    urls: Array,
    header: Boolean,
    playlist: Boolean,
    title: String,
    viewAll: Boolean,
    names: Array,
    detail: Array
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