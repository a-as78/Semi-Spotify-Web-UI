<template>
    <div class="playlist-song row-flex">
        <div class="title row-flex">
            <div class="number">{{number}}</div>
            <div class="cover row-flex center">
                <img class="song-cover"
                     src="../assets/Images/Image 386.png"
                     alt="song cover">
            </div>
            <div class="name"
                 @click="setCurrentSong(song)">{{song.name}}</div>
        </div>
        <div class="artist">{{song.artistName}}</div>
        <div class="album">{{song.albumName}}</div>
        <div class="items row-flex">
            <div class="row-flex center item duration">
                {{song.duration}}
            </div>
            <div class="item row-flex center more-item">
                <img :class="{show: created , more: playlist}"
                     src="../assets/Icons/More.svg" 
                     alt="">
            </div>
            <div class="item row-flex center like-item">
                <img class="like"
                     :class="{hide: created}"
                     src="../assets/Icons/heart.svg"
                     alt="">
            </div>
            <div class="item row-flex center add-item">
                <img class="add"
                     :class="{hide: created}"
                     src="../assets/Icons/Group 1338.svg" 
                     alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        song: Object,
        number: Number,
        created: Boolean
    },
    data() {
        return{
            playlist: !this.created
        }
    },
    methods: {
        async setCurrentSong(song){
            await this.$store.commit("setCurrentSong", song);
            console.log("DONE!!!", song)
        }
    }
}
</script>

<style lang="scss" scoped>
.playlist-song{
    align-items: center;
    justify-content: space-between;
}
.title{
    align-items: center;
}
.title, .artist, .album{
    width: 28%;
}
.items{
  display: flex;
  justify-content: flex-start;
  width: 16%;
}
.number{
    width: 15px;
}
.number , .album , .duration{
    color: #99999F;
}
.song-cover{
    padding: 10px;
}
.more , .like, .add{
    width: 15px;
    height: 15px;
}
.item{
    padding: 10px 5px;
    width: 25px;
    height: 25px;
}
.more{
    display: none;
}
@media (max-width: 576px) {
    .album{
        display: none;
    }
    .duration, .like-item , .add-item{
        display: none;
    }
    .title, .artist, .album{
        width: 40%;
        font-size: 12px;
    }
    .playlist-song{
        justify-content: space-around;
    }
    .more, .more-item{
        display: flex;
    }
    .artist, .name{
        display: flex;
        justify-content: center;
    }
}
@media (min-width: 576px) and (max-width: 768px) {
    .album{
        display: none;
    }
    .title, .artist, .album{
        width: 30%;
    }
    .items{
        width: 30%;
    }
}
</style>