<template>
  <div>
      <div class="title row-flex">
      <div>{{title}}</div>
      <div v-if="viewAll"
           class="view-all">VIEW ALL</div>
      <div v-else
           class="header-options row-reverse-flex">
        <div class="next">
          <img src="../assets/Icons/Path 434.svg" alt="next">
        </div>
        <div class="previous">
          <img src="../assets/Icons/Path 759.svg" alt="next">
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
</style>
