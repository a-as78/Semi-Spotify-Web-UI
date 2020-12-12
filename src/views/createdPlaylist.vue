<template>
    <div class="playlist-body">
        <div class="playlist-header row-flex">
          <div class="row-flex">
            <div class="playlist-image">
                <img class="playlist-cover"
                     src="../assets/Images/Classic rock.png" 
                     alt="playlist cover">
            </div>
            <div class="playlist-info column-flex">
                <div class="type">Playlist</div>
                <div class="playlist-name">70s Rock Anthems</div>
                <div class="playlist-detail">Golden age of rock. Cover: Led Zeppelin</div>
                <div class="playlist-duration">88 Songs, 9 hr 13 min</div>
                <div class="items row-flex center only-phone">
                  <div class="button row-flex center">
                    SHUFFLE PLAY
                  </div>
                  <div class="edit-button row-flex center">
                    EDIT
                  </div>
                  <div class="more-button row-flex center">
                    <img class="more"
                        src="../assets/Icons/More.svg"
                        alt="more">
                  </div>
                </div>
            </div>
          </div>
          <div class="items row-flex center only-desktop">
              <div class="button row-flex center">
                  SHUFFLE PLAY
              </div>
              <div class="edit-button row-flex center">
                  EDIT
              </div>
              <div class="more-button row-flex center">
                  <img class="more"
                        src="../assets/Icons/More.svg"
                        alt="more">
              </div>
            </div>
            <div class="followers-number">
              387,722 FOLOWERS
            </div>
        </div>
        <div class="playlist">
          <div class="playlist-songs-section row-flex">
            <div class="search-section row-flex">
              <div class="search-button">
                <img class="search-icon" 
                      src="../assets/Icons/Search.svg"
                      alt="search">
              </div>
              <div class="playlist-search-title">
                Playlist search
              </div>
            </div>
            <div class="playlist-songs-display row-flex">
              <div class="songs-display-title">
                Playlist songs
              </div>
              <div class="display-button">
                <img class="display-iocn"
                     src="../assets/Icons/Path 112.svg"
                     alt="display">
              </div>
            </div>
          </div>
          <div class="list-header row-flex">
            <div class="title row-flex">
              <div class="song-number">#</div>
              <div class="song-title">Title</div>
            </div>
            <div class="song-artist">Artist</div>
            <div class="song-album">Album</div>
            <div class="song-duration">Duration</div>
          </div>
          <playlist-song v-for="(song,index) in songs"
                         :key="index"
                         :number="index+1"
                         :song="song"
                         :created="true">
          </playlist-song>
        </div>
      </div>
</template>

<script>
import PlaylistSong from '../components/playlistSong.vue';

export default {
    components: {
      PlaylistSong
    },
    data(){
      return{
        // songs:[
        //   {
        //     title: "Rhiannon",
        //     artist: "Flleetwood Mac",
        //     album: "Fleetwood Mac",
        //     duration: "5:53"
        //   },
        //   {
        //     title: "Rhiannon",
        //     artist: "Flleetwood Mac",
        //     album: "Fleetwood Mac",
        //     duration: "5:53"
        //   },
        //   {
        //     title: "Rhiannon",
        //     artist: "Flleetwood Mac",
        //     album: "Fleetwood Mac",
        //     duration: "5:53"
        //   },
        //   {
        //     title: "Rhiannon",
        //     artist: "Flleetwood Mac",
        //     album: "Fleetwood Mac",
        //     duration: "5:53"
        //   },
        //   {
        //     title: "Rhiannon",
        //     artist: "Flleetwood Mac",
        //     album: "Fleetwood Mac",
        //     duration: "5:53"
        //   },
        //   {
        //     title: "Rhiannon",
        //     artist: "Flleetwood Mac",
        //     album: "Fleetwood Mac",
        //     duration: "5:53"
        //   },
        //   {
        //     title: "Rhiannon",
        //     artist: "Flleetwood Mac",
        //     album: "Fleetwood Mac",
        //     duration: "5:53"
        //   },
        //   {
        //     title: "Rhiannon",
        //     artist: "Flleetwood Mac",
        //     album: "Fleetwood Mac",
        //     duration: "5:53"
        //   },
        //   {
        //     title: "Rhiannon",
        //     artist: "Flleetwood Mac",
        //     album: "Fleetwood Mac",
        //     duration: "5:53"
        //   },
        //   {
        //     title: "Rhiannon",
        //     artist: "Flleetwood Mac",
        //     album: "Fleetwood Mac",
        //     duration: "5:53"
        //   },
        //   {
        //     title: "Rhiannon",
        //     artist: "Flleetwood Mac",
        //     album: "Fleetwood Mac",
        //     duration: "5:53"
        //   },
        //   {
        //     title: "Rhiannon",
        //     artist: "Flleetwood Mac",
        //     album: "Fleetwood Mac",
        //     duration: "5:53"
        //   }
        // ],
        artistTitle: "Featured artists",
        artists: [
          {
            name: "name",
            url: require("../assets/Images/Mask Group 305.png"),
            detail: "21323"
          },
          {
            name: "name",
            url: require("../assets/Images/Mask Group 321.png"),
            detail: "21323"
          },
          {
            name: "name",
            url: require("../assets/Images/The Velvet Underground.png"),
            detail: "21323"
          },
          {
            name: "name",
            url: require("../assets/Images/Lou Reed.png"),
            detail: "21323"
          },
          {
            name: "name",
            url: require("../assets/Images/Kurt.png"),
            detail: "21323"
          },
          {
            name: "name",
            url: require("../assets/Images/Bowie.png"),
            detail: "21323"
          }
        ],
      }
    },
    computed: {
      songs() {
        console.log(this.$store)
        return this.$store.getters.songs
      }
    }
}
</script>

<style lang="scss" scoped>
.playlist-body{
    color: white;
    width: calc(100% - 280px);
    height: 100%;
    background-color: #161A1A;
    padding: 100px 140px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.playlist-header{
    justify-content: space-between;
    position: relative;
    margin-bottom: 30px;
}
.followers-number{
  position: absolute;
  bottom: 0px;
  right: 0px;
  color: #99999F;
  font-size: 15px;
}
.playlist-image{
    margin: 35px;
    margin-left: 0px;
}
.playlist-cover{
    width: 200px;
}
.playlist-info{
    justify-content: center;
}
.type{
    padding: 10px 0px;
}
.playlist{
    padding-bottom: 90px;
}
.playlist-name{
    font-size: 50px;
}
.playlist-detail{
    font-size: 16px;
}
.playlist-duration{
    font-size: 14px;
    padding: 10px 0px;
    color: #99999F;
}
.button{
    width: 160px;
    height: 40px;
    background-image: linear-gradient(to right , #35EDFB, #9B2DEF);
    border-radius: 40px;
}
.more-button{
    width: 40px;
    height: 38px;
    border: 1px solid white;
    border-radius: 50%;
}
.edit-button{
    margin: 0px 20px;
    padding: 0px 20px;
    border: 1px solid white;
    border-radius: 25px;
    height: 38px;
}
.more , .like{
    width: 15px;
    height: 15px;
}
.playlist-songs-section{
  justify-content: space-between;
}
.search-section{
  padding-bottom: 5px;
  border-bottom: 1px solid white;
}
.playlist-songs-display{
    width: 16%;
    display: flex;
    justify-content: flex-start;
}
.songs-display-title, .playlist-search-title{
  padding: 0px;
  padding-right: 15px;
}
.title, .song-artist, .song-album{
  width: 28%;
}
.song-duration{
  width: 16%;
  display: flex;
  justify-content: flex-start;
}
.playlist{
  margin-top: 30px;
}
.list-header{
  justify-content: space-between;
  margin: 10px 0px;
  color: #99999F
}
.song-number{
  width: 30px;
}
.only-phone{
  display: none;
}
.only-desktop{
  display: flex;
}

@media (max-width: 576px) {
  .playlist-body{
    width: calc(100% - 60px);
    padding: 0px 30px;
  }
  .only-phone{
    display: flex;
  }
  .only-desktop{
    display: none;
  }
  .playlist-cover{
    width: 80px;
  }
  .type, .playlist-detail, .followers-number{
    display: none;
  }
  .playlist-name{
    font-size: 17px;
    // margin: 0px 0px 10px;
  }
  .playlist-detail{
    font-size: 14px;
    display: none;
  }
  .playlist-duration{
    font-size: 12px;
    // display: none;
  }
  .button{
    width: auto;
    height: 25px;
    font-size: 12px;
    padding: 0px 5px;
  }
  .edit-button{
    width: auto;
    height: 25px;
    padding: 0px 5px;
    margin: 0px 5px;
    font-size: 12px;
  }
  .more-button{
    width: auto;
    height: 25px;
    padding: 0px 5px;
    font-size: 12px;
  }
  .song-album{
    display: none;
  }
  .song-duration{
    display: none;
  }
  .title, .song-artist, .song-album{
    width: 40%;
  }
  .list-header{
    justify-content: space-evenly;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 768px){
  .playlist-body{
    width: calc(100% - 110px);
    padding: 0px 55px;
  }
  .playlist-cover{
    width: 150px;
  }
  .playlist-name{
    font-size: 30px;
  }
  .playlist-detail{
    font-size: 14px;
  }
  .playlist-duration{
    font-size: 12px;
  }
  .button{
    width: 130px;
    height: 30px;
  }
  .followers-number{
    font-size: 12px;
  }
  .song-album{
    display: none;
  }
  .title, .song-artist, .song-album{
    width: 30%;
  }
  .song-duration{
    width: 30%;
  }
  .list-header{
    justify-content: space-around;
  }
  .only-phone{
    display: flex;
  }
  .only-desktop{
    display: none;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 992px) {
  .playlist-body{
    width: calc(100% - 110px);
    padding: 0px 55px;
  }
  .playlist-cover{
    width: 150px;
  }
  .playlist-name{
    font-size: 30px;
  }
  .playlist-detail{
    font-size: 14px;
  }
  .playlist-duration{
    font-size: 12px;
  }
  .button{
    width: 130px;
    height: 30px;
  }
  .followers-number{
    font-size: 12px;
  }
}
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 992px) and (max-width: 1200px){
  .playlist-body{
    width: calc(100% - 200px);
    padding: 0px 100px;
  }
  .playlist-cover{
    width: 150px;
  }
  .playlist-name{
    font-size: 30px;
  }
  .playlist-detail{
    font-size: 14px;
  }
  .playlist-duration{
    font-size: 12px;
  }
  .button{
    width: 130px;
    height: 30px;
  }
  .followers-number{
    font-size: 12px;
  }
}
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) and (max-width: 1600px){
  .playlist-body{
    width: calc(100% - 200px);
    padding: 0px 100px;
  }
}

@media (min-width: 1600px){
  
}
</style>