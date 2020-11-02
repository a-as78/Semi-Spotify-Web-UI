<template>
  <div class="row-flex">
    <div class="songs-header"></div>
    <div class="songs row-flex">
      <div class="column-flex"
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
        'src: "../assets/Images/HIP - HOP.svg"',
        "../assets/Images/Indie.svg",
        "../assets/Images/POP.svg",
        "../assets/Images/rock.svg",
        "../assets/Images/DANCE.svg",
        "../assets/Images/Country.svg"
      ]
    }
  }
}
</script>

<style>
.songs{
  justify-content: space-between;
}
.song-cover{
  width: 50px;
  height: 50px;
  background-color: red;
}
</style>