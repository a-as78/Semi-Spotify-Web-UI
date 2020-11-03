<template>
  <div class="artists column-flex">
    <div class="artists-header row-flex">
      <div>You might like these artists</div>
      <div class="header-options row-reverse-flex">
        <div class="next">
          <img src="../assets/Icons/Path 434.svg" alt="next">
        </div>
        <div class="previous">
          <img src="../assets/Icons/Path 759.svg" alt="next">
        </div>
      </div>
    </div>
    <div class="artists-body row-flex">
      <div class="artist column-flex"
           v-for="(url, index) in artisturl" 
           :key="index">
        <div class="artist-pic-body">
          <img class="artist-pic"
             :src= "url" 
             alt="cover">
        </div>
        <div class="artist-name">hii</div>
        <div class="artist-likes row-flex">
          <div class="artist-like-icon">
            <img src="../assets/Icons/heart.svg" alt="like">
          </div>
          <div class="artist-like-number">hey</div>
        </div>
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
      artisturl: [
        require("../assets/Images/Mask Group 305.png"),
        require("../assets/Images/Mask Group 321.png"),
        require("../assets/Images/The Velvet Underground.png"),
        require("../assets/Images/Lou Reed.png"),
        require("../assets/Images/Kurt.png"),
        require("../assets/Images/Bowie.png")
      ]
    }
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
.next, .previous{
  margin: 5px;
}
.artist-like-icon{
  padding: 0px 5px;
}
.artist-pic-body{
  background-color: blue;
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