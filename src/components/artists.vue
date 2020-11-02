<template>
  <div class="row-flex">
    <div class="artists-header"></div>
    <div class="artists row-flex">
      <div class="column-flex"
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
        "../assets/Images/HIP - HOP.svg",
        "../assets/Images/Indie.svg",
        "../assets/Images/POP.svg",
        "../assets/Images/rock.svg",
        "../assets/Images/DANCE.svg",
        "../assets/Images/Country.svg"
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.artists{
  justify-content: space-between;
}
.artist-like-icon{
  padding: 0px 5px;
}
.artist-pic-body{
  width: 50px;
  height: 50px;
  background-color: blue;
  border-radius: 50%;
}
.artist-likes{
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: #99999F;
}
</style>