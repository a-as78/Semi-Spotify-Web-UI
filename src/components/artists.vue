<template>
  <div class="artists column-flex">
    <component-header v-if="header"
                      :title="title"
                      :viewAll="false"
                      @next="scrollLeft"
                      @previous="scrollRight"></component-header>
    <div class="artists-body row-flex"
         ref="artistBox">
      <app-artist class="artist column-flex"
                  v-for="(artist, index) in artists" 
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
    header: Boolean,
    artists: Array
  },
  data(){
    return{
      title: "You might like these artists",
      pose : 0
    }
  },
  created(){
    console.log(this.$refs.artistBox)
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
      this.pose-=50
      this.$refs.artistBox.scroll({
        top: 0,
        left: this.pose,
        behavior: 'smooth'
        });
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
.artists-body{
  justify-content: space-between;
  overflow-y: hidden;
  overflow-x: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
/* Hide scrollbar for Chrome, Safari and Opera */
.artists-body::-webkit-scrollbar {
  display: none;
}
.artist{
  min-width: 100px;
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