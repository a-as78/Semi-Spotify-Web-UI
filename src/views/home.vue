<template>
  <div>
      <app-header></app-header>
      <div class="home-body">
        <home-flow></home-flow>        
      </div>
  </div>
</template>

<script>
import AppHeader from '../components/header.vue'
import HomeFlow from '../components/flow.vue'

export default {
  components: {
      AppHeader,
      HomeFlow
  }
}
</script>

<style>
.home-body{
  height: 100%;
  background-color: #161A1A;
  padding: 0px 150px;
}
app-header{
  position: fixed;
  top: 0;
}
home-flow{
  padding-top: 50px;
}
</style>
