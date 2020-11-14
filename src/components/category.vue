<template>
  <div>
    <div class="category">
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
    url: String
  },
  data(){
    return{
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
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