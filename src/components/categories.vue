<template>
  <div class="row-flex">
    <div class="category">
      <img v-for="(url, index) in categoriesUrl" :key="index" :src= url alt="cover">
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data(){
    return{
      categoriesUrl: [
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

<style>

</style>