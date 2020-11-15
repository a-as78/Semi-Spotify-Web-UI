<template>
    <div class="playlist-song row-flex">
        <div class="title row-flex">
            <div class="number">{{number}}</div>
            <div class="cover row-flex center">
                <img class="song-cover"
                     src="../assets/Images/Image 386.png"
                     alt="song cover">
            </div>
            <div class="name">{{song.title}}</div>
        </div>
        <div class="artist">{{song.artist}}</div>
        <div class="album">{{song.album}}</div>
        <div class="items row-flex">
            <div class="row-flex center item duration">{{song.duration}}</div>
            <div class="item row-flex center">
                <img class="more"
                     src="../assets/Icons/More.svg" 
                     alt="">
            </div>
            <div class="item row-flex center">
                <img class="like"
                     src="../assets/Icons/heart.svg"
                     alt="">
            </div>
            <div class="item row-flex center">
                <img class="add"
                     src="../assets/Icons/Group 1338.svg" 
                     alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        song: Array,
        number: Number
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
    .duration{
        display: none;
    }
}
@media (min-width: 576px) and (max-width: 768px) {
    .album{
        display: none;
    }
}
</style>