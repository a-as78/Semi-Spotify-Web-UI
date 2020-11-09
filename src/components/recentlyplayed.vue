<template>
  <div class="recently-played row-flex">
      <div class="header">
          <div class="title"></div>
          <div class="option"></div>
      </div>
      <div class="items row-flex itmes"
           v-for="(item, index) in items"
           :key="index">
           <app-artist v-if="item.artist"
                        :artist="item"
                        class="item">
            </app-artist>
           <app-song v-if="item.playlist"
                      :playlist="true"
                      :song="item"
                      class="item">
            </app-song>
           <app-song v-if="item.song"
                      :song="item"
                      class="item">
            </app-song>
      </div>
      
  </div>
</template>

<script>
import AppArtist from '../components/artist.vue'
import AppSong from '../components/song.vue'

export default {
  components: {
    AppSong,
    AppArtist
  },
  props: [
    'recentlyPlayed'
  ],
  data() {
    return {
      items: this.recentlyPlayed
    }
  },
  created(){
    // console.log("recently played" , this.recentlyPlayed)
  },
  methods: {
    reportWindowSize() {
      if(window.innerWidth > 1200 ){
        this.items = this.recentlyPlayed  
      }else if(window.innerWidth > 992 ){
        this.items = this.recentlyPlayed.slice(0 , 5)  
      }else if(window.innerWidth > 768 ){
        this.items = this.recentlyPlayed.slice(0 , 4)  
      }else if(window.innerWidth > 567 ){
        this.items = this.recentlyPlayed.slice(0 , 3)  
      }else if(window.innerWidth < 567 ){
        this.items = this.recentlyPlayed.slice(0 , 2)  
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
.body{
  width: 100%;
  justify-content: space-between;
}
.recently-played{
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.items{
  justify-content: space-between;
}
.item{
  min-width: 100px;
  padding: 0px 10px;
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
  .items{
    width: 16.5%;
  }
}
</style>
