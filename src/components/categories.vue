<template>
  <div class="categories row-flex">
    <div class="category"
         v-for="(url, index) in urls" 
         :key="index">
      <app-category class="category-cover"
           :url="url">
      </app-category>
    </div>
  </div>
</template>

<script>

import AppCategory from './category.vue';

export default {
  components: {
    AppCategory
  },
  props: {
    categoriesUrl: Array
  },
  data(){
    return{
      urls: this.categoriesUrl
    }
  },
  methods: {
    reportWindowSize() {
      if(window.innerWidth > 1200){
        this.urls = this.categoriesUrl
      }else if(window.innerWidth > 992 ){
        this.urls = this.categoriesUrl.slice(0 , 5)  
      }else if(window.innerWidth > 768 ){
        this.urls = this.categoriesUrl.slice(0 , 4)  
      }else if(window.innerWidth > 567 ){
        this.urls = this.categoriesUrl.slice(0 , 3)  
      }else if(window.innerWidth < 567 ){
        this.urls = this.categoriesUrl.slice(0 , 2)  
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
.categories{
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin: 20px 0px;
}
.category{
  margin: 10px;
  width: 100%;
}
.category-cover{
  width: 100%;
}

@media (max-width: 576px) {
  .category-cover{
    max-width: 165px;
  }
  .categories{
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