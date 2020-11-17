<template>
    <div class="myplaylist-body">
        <div class="header">My playlists</div>
        <div class="playlists row-flex wrap center">
            <div class="create-playlist column-flex center">
                <div class="add-button">
                    <img class="add-icon"
                         src="../assets/Icons/Group 1338.svg" 
                         alt="add">
                </div>
                <div class="create-title">Create Playlist</div>
            </div>
            <app-song class="playlist"
                      v-for="(playlist, index) in playlists"
                      :key="index"
                      :song="playlist"
                      :playlist="true">
            </app-song>
        </div>
    </div>
</template>

<script>
import AppSong from '../components/song.vue';

export default {
    components: {
        AppSong
    },
    data(){
        return {
            playlists: [
                {
                    name: "gesv",
                    detail: "1230 songs, 2Days and 24 Hours",
                    url: require("../assets/Images/Liked From Radio.png")
                },
                {
                    name: "gesv",
                    detail: "1230 songs, 2Days and 24 Hours",
                    url: require("../assets/Images/Liked From Radio.png")
                },
                {
                    name: "gesv",
                    detail: "1230 songs, 2Days and 24 Hours",
                    url: require("../assets/Images/Liked From Radio.png")
                },
                {
                    name: "gesv",
                    detail: "1230 songs, 2Days and 24 Hours",
                    url: require("../assets/Images/Liked From Radio.png")
                },
                {
                    name: "gesv",
                    detail: "1230 songs, 2Days and 24 Hours",
                    url: require("../assets/Images/Liked From Radio.png")
                },
                {
                    name: "gesv",
                    detail: "1230 songs, 2Days and 24 Hours",
                    url: require("../assets/Images/Liked From Radio.png")
                },
                {
                    name: "gesv",
                    detail: "1230 songs, 2Days and 24 Hours",
                    url: require("../assets/Images/Liked From Radio.png")
                },
                {
                    name: "gesv",
                    detail: "1230 songs, 2Days and 24 Hours",
                    url: require("../assets/Images/Liked From Radio.png")
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    color: white;
    font-size: 22px;
    margin: 40px 10px;
    font-size: 24px;
}
.myplaylist-body{
    color: white;
    width: calc(100% - 280px);
    height: 100%;
    background-color: #161A1A;
    padding: 100px 140px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.playlists{
    justify-content: flex-start;
    margin: 0px auto;
}
.create-playlist{
    width: 194px;
    height: 194px;
    margin: 10px;
    margin-bottom: auto;
    border: 3px solid white;
    border-radius: 8px;
}
.playlist{
    width: 200px;
    height: auto;
}
.add-button{
    background-color: #2DCEEF;
    padding: 10px;
    border-radius: 50%;
    margin: 8px;
}
.add-icon{
    width: 20px;
    height: 20px;
}
.create-title{
    margin: 8px;   
}

@media (max-width: 576px){
  .myplaylist-body{
    width: calc(100% - 60px);
    padding: 0px 30px;
  }
  .create-playlist{
    width: 104px;
    height: 104px;
  }
  .playlist{
    width: 110px;
    height: auto;
  }
  .create-title{
    font-size: 12px;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 768px){
  .myplaylist-body{
    width: calc(100% - 110px);
    padding: 0px 55px;
  }
  .create-playlist{
    width: 124px;
    height: 124px;
  }
  .playlist{
    width: 130px;
    height: auto;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 992px){
  .myplaylist-body{
    width: calc(100% - 110px);
    padding: 0px 55px;
  }
  .create-playlist{
    width: 164px;
    height: 164px;
  }
  .playlist{
    width: 170px;
    height: auto;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1200px){
  .myplaylist-body{
    width: calc(100% - 140px);
    padding: 0px 70px;
  }
  .create-playlist{
    width: 164px;
    height: 164px;
  }
  .playlist{
    width: 170px;
    height: auto;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) and (max-width: 1600px){
  .myplaylist-body{
    width: calc(100% - 200px);
    padding: 0px 100px;
  }
  .create-playlist{
    width: 164px;
    height: 164px;
  }
  .playlist{
    width: 170px;
    height: auto;
  }
}

@media (min-width: 1600px){
  
}
</style>