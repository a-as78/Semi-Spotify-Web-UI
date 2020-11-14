<template>
    <div class="genre-overview-body">
        <div class="genre-nav-bar row-flex">
            <div class="genre-name">ROCK</div>
            <div class="nav-items row-flex">
                <div class="nav-item">OVERVIEW</div>
                <div class="nav-item">PLAYLISTS</div>
                <div class="nav-item">NEW RELEASES</div>
                <div class="nav-item">ARTISTS</div>
            </div>
        </div>
        <app-songs :title='popularTitle'
                 :viewAll="false"
                 :playlist="true"
                 :header="true"
                 :songs="popular"></app-songs>
        <app-songs :viewAll="true"
                 :title="playlistTitle"
                 :playlist="true"
                 :header="true"
                 :songs="playlists"></app-songs>
        <app-songs :title='songsTitle'
                 :songs='song'
                 :viewAll="true"
                 :header="true"></app-songs>
         <app-artists :header="true"
                      :title='artistTitle'
                      :viewAll="true"
                      :artists="artist"></app-artists>
    </div>
</template>

<script>
import AppSongs from '../components/songs.vue'
import AppArtists from '../components/artists.vue'

export default {
  components: {
      AppSongs,
      AppArtists
  },
  data(){
    return{
      popularTitle: "Popular in this week",
      popular: [
        {
          name: "Deep Focus",
          url: require("../assets/Images/Deep Focus.png"),
          detail: "4234"
        },
        {
          name: "Productive Morning",
          url: require("../assets/Images/Productive Morning.png"),
          detail: "5136"
        },
        {
          name: "White Noise",
          url: require("../assets/Images/White Noise.png"),
          detail: "2545"
        },
        {
          name: "Nature Song",
          url: require("../assets/Images/Nature.png"),
          detail: "52652"
        },
        {
          name: "Brain Food",
          url: require("../assets/Images/Brain Food.png"),
          detail: "525562"
        },
        {
          name: "Morning Rush",
          url: require("../assets/Images/Morning Rush.png"),
          detail: "25235"
        }
      ],
      playlistTitle: "Playlists",
      playlists: [
        {
          name: "Russian Composers",
          url: require("../assets/Images/COMPOSERS.png"),
          detail: "42525"
        },
        {
          name: "Guitar Solos",
          url: require("../assets/Images/GUITAR SOLOS.png"),
          detail: "42525"
        },
        {
          name: "Workout Rock",
          url: require("../assets/Images/WORKOUT rock.png"),
          detail: "42525"
        },
        {
          name: "Rock Ballads",
          url: require("../assets/Images/ROCK ballads.png"),
          detail: "42525"
        },
        {
          name: "80s Alternative",
          url: require("../assets/Images/80s alternative rock.png"),
          detail: "42525"
        },
        {
          name: "Rockabilly",
          url: require("../assets/Images/ROCKABILLY.png"),
          detail: "42525"
        }
      ],
      songsTitle: "New releases",
      song: [
        {
          name: "LPS",
          url: require("../assets/Images/Image 418.png"),
          detail: "safc sa"
        },
        {
          name: "Numb Numb Juice",
          url: require("../assets/Images/Image 419.png"),
          detail: "vad av"
        },
        {
          name: "Drip or Down 2",
          url: require("../assets/Images/Image 693.png"),
          detail: "badb ad "
        },
        {
          name: "Shadows",
          url: require("../assets/Images/Image 695.png"),
          detail: "gbvsav da v"
        },
        {
          name: "Don't Feed the Pop Monster",
          url: require("../assets/Images/Image 696.png"),
          detail: "gsafvcs "
        },
        {
          name: "HEF",
          url: require("../assets/Images/Mask Group 237.png"),
          detail: "gsav safv"
        }
      ],
      artistTitle: "Artists",
      artist: [
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
      playlist: true
    }
  }
}
</script>

<style lang="scss" scoped>
.genre-overview-body{
  color: white;
  width: calc(100% - 280px);
  height: 100%;
  background-color: #161A1A;
  padding: 0px 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.genre-nav-bar{
    color: white;
    width: 100%;
}
.genre-name{
    padding: 30px;
    font-size: 40px;
    padding-left: 0px;
}
.nav-item{
    font-size: 16px;
    padding: 50px 20px 30px;
}

@media (max-width: 576px) {
  .genre-overview-body{
    width: calc(100% - 60px);
    padding: 0px 30px;
  }
  .genre-name{
    padding: 30px 15px;
    font-size: 25px;
    padding-left: 0px;
  }
  .nav-items{
      display: none;
  }
  .nav-item{
    font-size: 12px;
    padding: 40px 7px 30px;
  }  
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .genre-overview-body{
    width: calc(100% - 110px);
    padding: 0px 55px;
  }
  .genre-name{
    padding: 30px 15px;
    font-size: 25px;
    padding-left: 0px;
  }
  .nav-item{
    font-size: 12px;
    padding: 40px 7px 30px;
  }  
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .genre-overview-body{
    width: calc(100% - 110px);
    padding: 0px 55px;
  }
  .genre-name{
    padding: 30px 20px;
    font-size: 30px;
    padding-left: 0px;
  }
  .nav-item{
    font-size: 12px;
    padding: 47px 10px 30px;
  }  
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .genre-overview-body{
    width: calc(100% - 140px);
    padding: 0px 70px;
  }
  .genre-name{
    padding: 30px 25px;
    font-size: 35px;
    padding-left: 0px;
  }
  .nav-item{
    font-size: 15px;
    padding: 47px 12px 30px;
  }  
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .genre-overview-body{
    width: calc(100% - 200px);
    padding: 0px 100px;
  }
  .genre-name{
    padding: 30px;
    font-size: 35px;
    padding-left: 0px;
  }
  .nav-item{
    font-size: 15px;
    padding: 47px 15px 30px;
  }  
}

@media (min-width: 1600px){
}
</style>