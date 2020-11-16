<template>
  <div class="column-flex app-body">
    <ham-but class="ham-but"
             :user="userName">
    </ham-but>
    <app-header class="header"
                :authenthicated = "authenthicated"
                :notAuthenthicated = "notAuthenthicated"></app-header>
    <router-view class="body"></router-view>
    <div class="player row-flex">
      <app-player :class="{hide: hidePlayer}"></app-player>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/header.vue';
import AppPlayer from './components/player.vue';
import HamBut from './components/hamburgerButton.vue';


export default {
  components: {
    AppHeader,
    AppPlayer,
    HamBut
  },
  data(){
    return {
      userName: 'John Doe',
      hidePlayer: false,
      authenthicated: true,
      notAuthenthicated: false
    }
  },
  methods: {
  },
  computed: {
  },
  created(){
    console.log(this.$route.name)
    if(this.$route.name == "signup"){
      console.log("sign up bood")
      this.hidePlayer = true;
      this.authenthicated = false;
      this.notAuthenthicated = true
    } else {
      this.hidePlayer = false;
      this.authenthicated = true;
      this.notAuthenthicated = false
    }
  }
}
</script>

<style lang="scss" scoped>
// @import "./assets/styles/style.scss";
// @import "./assets/styles/rest.scss";

.app-body{
  position: relative !important;
  background-color: #161A1A;
}
.ham-but{
  display: none !important;
  position: absolute !important;
  top: -20px;
  left: 0px;
  z-index: 100;
}
body{
  background-color: #161A1A;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.header{
  position: relative;
  width: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 3;
}
.player{
  width: 100%;
  position: fixed;
  bottom: 0px;
  right: 0px;
  justify-content: center;
  align-items: center;
  z-index: 3;
}
.body{
  // width: 100%;
  padding-top: 90px !important;
  padding-bottom: 100px !important;
}
.hide{
  display: none;
}

@media (max-width: 576px) {
  .ham-but{
    display: block !important;
  }
  // .player{
  //   width: 100%;
  // }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 768px){
  .ham-but{
    display: block !important;
  }
}
</style>
