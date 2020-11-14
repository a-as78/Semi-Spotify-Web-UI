<template>
    <div class="genre-overview-body">
        <div class="genre-nav-bar row-flex whole-width">
            <div class="genre-name">ROCK</div>
            <div class="nav-items row-flex">
                <div class="nav-item">OVERVIEW</div>
                <div class="nav-item">PLAYLISTS</div>
                <div class="nav-item">NEW RELEASES</div>
                <div class="nav-item">ARTISTS</div>
            </div>
        </div>
        <div class="populars whole-width">
            <div class="section-header">
                <app-header :title="popularTitle"
                            :viewAll="false">
                </app-header>
            </div>
            <div class="items row-flex">
                <app-song v-for="(popular, index) in populars"
                          :key="index"
                          :song="popular"></app-song>
            </div>
        </div>
        <div class="playlists whole-width">
            <div class="section-header">
                <app-header :title="playlistTitle"
                            :viewAll="true">
                </app-header>
            </div>
            <div class="items row-flex">
                <app-song v-for="(playlist, index) in playlists"
                          :key="index"
                          :song="playlist"></app-song>
            </div>
        </div>
        <div class="new-released whole-width">
            <div class="section-header">
                <app-header :title="songsTitle"
                            :viewAll="true">
                </app-header>
            </div>
            <div class="items row-flex">
                <app-song v-for="(song, index) in songs"
                          :key="index"
                          :song="song"></app-song>
            </div>
        </div>
        <div class="artists whole-width">
            <div class="section-header">
                <app-header :title="artistTitle"
                            :viewAll="true">
                </app-header>
            </div>
            <div class="items row-flex">
                <app-artist v-for="(artist, index) in artists"
                          :key="index"
                          :artist="artist"></app-artist>
            </div>
        </div>
    </div>
</template>

<script>
import AppSong from '../components/song.vue'
import AppArtist from '../components/artist.vue'
import AppHeader from '../components/componentHeader.vue';

export default {
  components: {
      AppSong,
      AppArtist,
      AppHeader
  },
  data(){
    return{
      popularTitle: "Popular in this week",
      populars: [
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
      songs: [
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.genre-overview-body{
  color: white;
  font-size: 22px;
  width: calc(100% - 280px);
  height: 100%;
  background-color: #161A1A;
  padding: 100px 140px !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.genre-nav-bar{
    color: white;
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
.whole-width{
    width: 100%;
}
</style>