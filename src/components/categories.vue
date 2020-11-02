<template>
  <div class="categories row-flex">
    <div class="category row-flex"
         v-for="(url, index) in categoriesUrl" 
         :key="index">
      <img :src= "url" 
           alt="cover">
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
        'src: "../assets/Images/HIP - HOP.svg"',
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
.categories{
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
}
.category{
  width: 200px;
  height: 50px;
  background-color: burlywood;
}
</style>