<template>
  <div class="artists column-flex">
    <component-header v-if="header"
                      :title="title"
                      :viewAll="viewAll"
                      @next="scrollLeft"
                      @previous="scrollRight">
    </component-header>
    <div class="artists-body row-flex"
         :class="{'songs-body': doScroll , 'songs-body-viewALl': viewAll}"
         ref="artistBox">
      <app-artist class="column-flex"
                  v-for="(artist, index) in items" 
                  :key="index"
                  :artist="artist">
      </app-artist>
    </div>
  </div>
</template>

<script>
import ComponentHeader from './componentHeader.vue';
import AppArtist from './artist.vue';

export default {
  components: {
    ComponentHeader,
    AppArtist
  },
  props: {
    urls: Array,
    header: Boolean,
    viewAll: Boolean,
    title: String,
    artists: Array
  },
  data(){
    return{
      // title: "New Releases for You"
      doScroll: !this.viewAll,
      pose: 0,
      items: this.artists
    }
  },
  methods: {
    scrollLeft(){
      this.pose+=50
      this.$refs.artistBox.scroll({
        top: 0,
        left: this.pose,
        behavior: 'smooth'
        });
    },
    scrollRight(){
      this.pose -= 50
      this.$refs.artistBox.scroll({
        top: 0,
        left: this.pose,
        behavior: 'smooth'
        });
    },
    reportWindowSize() {
      if(this.viewAll){
        if(window.innerWidth > 1200 ){
          this.items = this.artists  
        }else if(window.innerWidth > 992 ){
          this.items = this.artists.slice(0 , 5)  
        }else if(window.innerWidth > 768 ){
          this.items = this.artists.slice(0 , 4)  
        }else if(window.innerWidth > 567 ){
          this.items = this.artists.slice(0 , 3)  
        }else if(window.innerWidth < 567 ){
          this.items = this.artists.slice(0 , 2)  
        }
      }
    }
  },
  mounted(){
    this.reportWindowSize();
    window.addEventListener("resize", this.reportWindowSize);
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
  justify-content: space-around;
  overflow-y: hidden;
  overflow-x: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
/* Hide scrollbar for Chrome, Safari and Opera */
.artists-body::-webkit-scrollbar {
  display: none;
}
// .artist{
//   min-width: 100px;
// }
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

@media (max-width: 576px) {
  
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  
}

@media (min-width: 1600px){
  
}
</style>