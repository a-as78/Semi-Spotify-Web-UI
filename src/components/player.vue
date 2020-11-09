<template>
  <div class="player-body row-flex">
    <div class="song row-flex">
      <div class="player-song-cover">
        <img class="song-cover" src="../assets/Images/Image 59.png" alt="cover">
      </div>
      <div class="song-detail column-flex">
        <div class="player-song-name">Rebel Rebel</div>
        <div class="player-song-artist">David Bowie</div>
      </div>
      <div class="song-feature">
        <img class="player-like-icon" 
             src="../assets/Icons/add to fav.svg" alt="fav">
        <img class="player-playlist-check-icon" 
             src="../assets/Icons/Alredy in Playlist.svg" alt="Already in Playlist">
      </div>
    </div>
    <div class="player-section clumn-flex">
      <div class="player-buttons row-flex">
        <img class="button" src="../assets/Icons/Shuffle18.svg" alt="shuffle">
        <img class="button" src="../assets/Icons/prev.svg" alt="shuffle">
        <img class="button" src="../assets/Icons/Pause.svg" alt="shuffle">
        <img class="button" src="../assets/Icons/next.svg" alt="shuffle">
        <img class="button" src="../assets/Icons/Repeat 18.svg" alt="shuffle">
      </div>
      <div class="player-duration-bar row-flex">
        <div class="played-duration">2:00</div>
        <div class="player-bar"></div>
        <div class="player-song-duration">4:00</div>
      </div>
    </div>
    <div class="settings row-flex">
      <div class="player-playlist">
        <img src="../assets/Icons/Queue.svg" alt="Queue">
      </div>
      <div class="player-volume">
        <img src="../assets/Icons/Volume.svg" alt="Volume">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
.player-body{
  width: 90%;
  max-width: 1860px;
  background-color: #3A3A3DB3;
  padding: 10px;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(50px);
}
.player-song-name{
  color: white;
  font-size: 15px;
}
.player-song-artist{
  color: #99999F;
  font-size: 13px;
}
.song-detail{
  padding: 10px;
  justify-content: center;
}
.song-feature{
  display: flex;
  justify-content: center;
  align-items: center;
}
.player-section{
  width: max-content;
  justify-content: center;
  align-items: center;
}
.player-playlist-check-icon , .player-like-icon{
  padding: 12px;
}
.player-buttons{
  width: 80%;
  padding: 0px 10%;
  padding-bottom: 20px;
  justify-content: space-between;
  align-items: center;
}
.player-bar{
  height: 5px;
  border-bottom: 1px solid white;
  width: 300px;
}
.player-playlist, .player-volume{
  padding: 0px 12px;
}
.player-duration-bar{
  color: white;
}
.played-duration, .player-song-duration{
  padding: 0px 5px;
}
.song , .settings{
  width: 300px;
}
.settings{
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 576px) {
  .song-feature{
    display: none !important;
  }
  .player-body{
    width: 100%;
    /* padding: 0px; */
    margin-top: 10px;
  }
  .player-bar{
    width: 120px;
  }
  .settings{
    display: none !important;
  }
  .player-buttons{
    padding-bottom: 10px;
  }
  .button{
    width: 15px;
  }
  .player-duration-bar{
    font-size: 13px;
  }
  .song-cover{
    width: 45px;
  }
  .player-song-name{
    font-size: 13px;
    width: 100px;
  }
  .player-song-artist{
    font-size: 11px;
  }
  .song , .settings{
    width: 0px !important;
  }
  .player-body{
    border-radius: 0px;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 768px) {
  .song-feature{
    display: none !important;
  }
  .player-body{
    width: 100%;
    /* padding: 0px; */
    margin-top: 10px;
  }
  .player-bar{
    width: 250px;
  }
  .settings{
    display: none !important;
  }
  .player-buttons{
    padding-bottom: 10px;
  }
  .button{
    width: 15px;
  }
  .player-duration-bar{
    font-size: 13px;
  }
  .song-cover{
    width: 45px;
  }
  .player-song-name{
    font-size: 15px;
    width: 100px;
  }
  .player-song-artist{
    font-size: 13px;
  }
  .song , .settings{
    width: 0px !important;
  }
  .player-body{
    border-radius: 0px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and  (max-width: 992px){
  .song-feature{
    display: none !important;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  
}

@media (min-width: 1600px){
  
}
</style>