<template>
  <div class="songs column-flex">
    <component-header v-if="header"
                      :title="title"
                      :viewAll="viewAll"
                      @next="scrollLeft"
                      @previous="scrollRight"></component-header>
    <div class="row-flex"
         :class="{'songs-body': doScroll , 'songs-body-viewALl': viewAll}"
         ref="songBox">
      <div class="song column-flex"
            v-for="(song, index) in items" 
           :key="index">
           <app-song :song="song"
                     :playlist="playlist"></app-song>
           </div>
    </div>
  </div>
</template>

<script>
import ComponentHeader from './componentHeader.vue';
import AppSong from './song.vue';

export default {
  components: {
    ComponentHeader,
    AppSong
  },
  props: {
    urls: Array,
    header: Boolean,
    playlist: Boolean,
    viewAll: Boolean,
    title: String,
    songs: Array
  },
  data(){
    return{
      // title: "New Releases for You"
      doScroll: !this.viewAll,
      pose: 0,
      items: this.songs
    }
  },
  methods: {
    scrollLeft(){
      this.pose+=50
      this.$refs.songBox.scroll({
        top: 0,
        left: this.pose,
        behavior: 'smooth'
        });
    },
    scrollRight(){
      this.pose -= 50
      this.$refs.songBox.scroll({
        top: 0,
        left: this.pose,
        behavior: 'smooth'
        });
    },
    reportWindowSize() {
      if(this.viewAll){
        if(window.innerWidth > 1200 ){
          this.items = this.songs  
        }else if(window.innerWidth > 992 ){
          this.items = this.songs.slice(0 , 5)  
        }else if(window.innerWidth > 768 ){
          this.items = this.songs.slice(0 , 4)  
        }else if(window.innerWidth > 567 ){
          this.items = this.songs.slice(0 , 3)  
        }else if(window.innerWidth < 567 ){
          this.items = this.songs.slice(0 , 2)  
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
.songs{
  margin: 20px 0px;
  width: 100%;
  justify-content: space-between;
}
.songs-header{
  justify-content: space-between;
  margin: 10px;
  color: white;
  font-size: 22px;
  font-weight: 600;
}
.songs-body{
  overflow-y: hidden;
  overflow-x: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
/* Hide scrollbar for Chrome, Safari and Opera */
.songs-body::-webkit-scrollbar {
  display: none;
}
.songs-body-viewALl{
  overflow: hidden;
}
.view-all{
  color: #D5D5D5;
  font-size: 14px;
  font-weight: 100;
}
.song{
  width: 100%;
  margin: 10px;
}
.song-cover{
  width: 100%;
}
.song-name{
  color: white;
  font-size: 15px;
  padding-top: 7px;
}
.song-artist{
  color: #99999F;
  font-size: 13px;
  padding-top: 3px;
}

@media (max-width: 576px) {
  .songs-body-viewALl{
    justify-content: center;
  }
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