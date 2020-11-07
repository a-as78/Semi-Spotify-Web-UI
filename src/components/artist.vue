<template>
  <div class="artist column-flex">
        <div class="artist-pic-body">
          <img class="artist-pic"
             :src= artist.url 
             alt="cover">
        </div>
        <div class="artist-name">{{artist.name}}</div>
        <div class="artist-likes row-flex">
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
    console.log(this.artist)
  }
}
</script>

<style lang="scss" scoped>
.artists{
  width: 100%;
  justify-content: space-between;
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
  padding: 0px 5px;
}
.artist-pic-body{
  border-radius: 50%;
  margin: 10px;
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
  }
.artist-like-number{
  font-size: 13px;
  color: #99999F;
}
</style>