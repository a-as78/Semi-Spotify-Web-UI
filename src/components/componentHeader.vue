<template>
  <div>
      <div class="title row-flex">
      <div>{{title}}</div>
      <div v-if="viewAll"
           class="view-all">
           VIEW ALL
      </div>
      <div v-else
           class="header-options row-reverse-flex">
        <div class="next"
             @click="next">
          <img src="../assets/Icons/Path 434.svg" 
               alt="next">
        </div>
        <div class="previous"
             @click="previous">
          <img src="../assets/Icons/Path 759.svg" 
               alt="next">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: ['viewAll',
          'title'
  ],
  data(){
    return{
    }
  },
  methods: {
    next(){
      this.$emit('next')
    },
    previous(){
      this.$emit('previous')
    }
  }
}
</script>

<style lang="scss" scoped>
.title{
  justify-content: space-between;
  margin: 10px;
  color: white;
  font-size: 22px;
  font-weight: 600;
}
.view-all{
  color: #D5D5D5;
  font-size: 14px;
  font-weight: 100;
}
.next, .previous{
  margin: 5px;
}

@media (max-width: 576px) {
 .title{
   font-size: 18px;
 } 
 .view-all{
   font-size: 12px;
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
  .title{
   font-size: 28px;
 } 
 .view-all{
   font-size: 24px;
 }
}
</style>
