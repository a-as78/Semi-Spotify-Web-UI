<template>
  <div class="row-flex">
    <div class="category">

      <img v-for="(url, index) in categoriesUrl" 
           :key="index" 
           :src="url"
            style="color: white"
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
        require("../assets/Images/HIP - HOP.svg"),
        require("../assets/Images/Indie.svg"),
        require("../assets/Images/POP.svg"),
        require("../assets/Images/rock.svg"),
        require("../assets/Images/DANCE - ELECTRO.svg"),
        require("../assets/Images/Country.svg")
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