<template>
  <div class="categories row-flex">
    <div class="category"
         v-for="(url, index) in categoriesUrl" 
         :key="index">
      <img class="category-cover"
           :src="url">
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
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
  },
  created(){
  }
}
</script>

<style>
.categories{
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  margin: 20px 0px;
}
.category{
  margin: 10px;
}
.category-cover{
  width: 100%;
}
</style>