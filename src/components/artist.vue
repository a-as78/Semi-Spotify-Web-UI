<template>
  <div class="artist column-flex">
        <div class="artist-pic-body">
          <img class="artist-pic"
             :src= artist.url 
             alt="cover">
        </div>
        <div class="artist-name">{{artist.name}}</div>
        <div class="artist-likes center row-flex">
          <div class="artist-like-icon">
            <img src="../assets/Icons/heart.svg" alt="like">
          </div>
          <div class="artist-like-number">{{artist.detail}}</div>
        </div>
      </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    artist: Object
  },
  data(){
    return{
      title: "You might like these artists"
    }
  },
  created(){
  }
}
</script>

<style lang="scss" scoped>
.artist{
  width: 95%;
}
.artists-header{
  margin: 10px;
  justify-content: space-between;
  color: #FFFFFF;
  font-size: 22px;
}
.artists-body{
  justify-content: space-between;
}
.next, .previous{
  margin: 5px;
}
.artist-like-icon{
  padding: 2px 5px 0px;
}
.artist-pic-body{
  border-radius: 50%;
  margin: 10px;
  margin-bottom: 0px;
  width: calc(100% - 20px);
}
.artist-pic{
width: 100%;
}
.artist-likes{
  width: 100%;
  justify-content: center;
  align-items: center;
}
.artist-name{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: #FFFFFF;
  padding-top: 3px;
  }
.artist-like-number{
  font-size: 13px;
  color: #99999F;
  padding-top: 5px;
}

@media only screen and (max-width: 576px){
  .artist{
    min-width: 137px;
    max-width: 185px;
  }
  .artist-name{
    font-size: 11px;
  }
  .artist-like-number{
    font-size: 10px;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media only screen and (min-width: 576px) and (max-width: 768px){
  .artist{
    min-width: 155px;
  }
  .artist-name{
    font-size: 11px;
  }
  .artist-like-number{
    font-size: 10px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media only screen and (min-width: 768px) and (max-width: 992px){
  .artist{
    min-width: 165px;
  }
}

/* Large devices (desktops, 992px and up) */
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .artist{
    min-width: 127px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media only screen and (min-width: 1200px) and (max-width: 1600px){
  .artist-name{
    font-size: 12px;
  }
  .artist-like-number{
    font-size: 10px;
  }
  .artist{
    min-width: 130px;
  }
}

@media only screen and (min-width: 1600px){
  .artist-name{
    font-size: 18px;
  }
  .artist-like-number{
    font-size: 14px;
  }
}
</style>