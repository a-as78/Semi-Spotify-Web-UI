<template>
  <div class="column-flex">
    <app-header class="header"></app-header>
    <router-view class="body"></router-view>
    <div class="player row-flex">
      <app-player></app-player>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/header.vue';
import AppPlayer from './components/player.vue';

export default {
  components: {
    AppHeader,
    AppPlayer
  }
}
</script>

<style lang="scss" scoped>
body{
  background-color: #161A1A;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.header{
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
  padding-top: 90px !important;
  padding-bottom: 90px !important;
}
</style>
