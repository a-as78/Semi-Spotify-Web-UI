<template>
  <div class="songs column-flex">
    <div class="songs-header row-flex">
      <div>New Releases for You</div>
      <div class="view-all">VIEW ALL</div>
    </div>
    <div class="songs-body row-flex">
      <div class="song column-flex"
           v-for="(url, index) in songsUrl" 
           :key="index">
        <img class="song-cover"
             :src= "url" 
             alt="cover">
        <div class="song-name">hii</div>
        <div class="song-artist">hey</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data(){
    return{
      songsUrl: [
        require("../assets/Images/Image 418.png"),
        require("../assets/Images/Image 419.png"),
        require("../assets/Images/Image 693.png"),
        require("../assets/Images/Image 695.png"),
        require("../assets/Images/Image 696.png"),
        require("../assets/Images/Mask Group 237.png")
      ]
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