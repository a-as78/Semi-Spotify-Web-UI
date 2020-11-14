<template>
  <div class="song column-flex">
    <img class="song-cover"
         :src="song.url" 
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
  padding-top: 5px;
}
.artist-like-icon{
  padding-right: 5px;
  padding-top: 2px;
}

@media (max-width: 576px) {
  .song{
    min-width: 95px;
    max-width: 145px;
  }
  .song-name{
    font-size: 11px;
  }
  .song-artist{
    font-size: 10px;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .song{
    min-width: 110px;
  }
  .song-name{
    font-size: 11px;
  }
  .song-artist{
    font-size: 10px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .song{
    min-width: 125px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .song-name{
    font-size: 12px;
  }
  .song-artist{
    font-size: 10px;
  }
}

@media (min-width: 1600px){
  .song-name{
    font-size: 18px;
  }
  .song-artist{
    font-size: 14px;
  } 
}
</style>