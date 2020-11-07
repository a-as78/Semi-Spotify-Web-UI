<template>
  <div class="song column-flex">
    <img class="song-cover"
         :src= song.url 
          alt="cover">
    <div class="song-name">{{song.name}}</div>
    <div class="row-flex">
      <div v-if="playlist"
           class="artist-like-icon">
        <img src="../assets/Icons/heart.svg" alt="like">
      </div>
        <div class="song-artist">{{song.detail}}</div>
      </div>
    </div>
</template>

<script>

export default {
  components: {
  },
  props: {
      playlist: Boolean,
      song: Object
  },
  data(){
    return{
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