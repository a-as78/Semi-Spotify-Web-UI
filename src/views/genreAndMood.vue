<template>
    <div class="genreandmood-body">
        <div class="genres">
            <div class="header">
                <div class="title">Genres</div>
            </div>
            <div class="genres-section row-flex">
                <app-category v-for="(genreUrl,index) in genreUrls"
                              :key="index"
                              class="category-item"
                              :url="genreUrl">
                </app-category>
            </div>
        </div>
        <div class="moods">
            <div class="header">
                <div class="title">Moods</div>
            </div>
            <div class="moods-section row-flex">
                <app-category v-for="(moodUrl,index) in moodUrls"
                              :key="index"
                              class="category-item"
                              :url="moodUrl">
                </app-category>
            </div>
        </div>
    </div>
</template>

<script>
import AppCategory from '../components/category.vue'

export default {
  components: {
      AppCategory
  },
  data(){
    return{
        genreUrls:[
            require('../assets/Images/HIP - HOP.svg'),
            require('../assets/Images/HIP - HOP.svg'),
            require('../assets/Images/HIP - HOP.svg'),
            require('../assets/Images/HIP - HOP.svg'),
            require('../assets/Images/HIP - HOP.svg'),
            require('../assets/Images/HIP - HOP.svg'),
            require('../assets/Images/HIP - HOP.svg'),
            require('../assets/Images/HIP - HOP.svg'),
            require('../assets/Images/HIP - HOP.svg'),
            require('../assets/Images/HIP - HOP.svg'),
            require('../assets/Images/HIP - HOP.svg'),
            require('../assets/Images/HIP - HOP.svg'),
            require('../assets/Images/HIP - HOP.svg'),
            require('../assets/Images/HIP - HOP.svg'),
            require('../assets/Images/HIP - HOP.svg'),
            require('../assets/Images/HIP - HOP.svg'),
            require('../assets/Images/HIP - HOP.svg'),
            require('../assets/Images/HIP - HOP.svg')

        ],
        moodUrls: [
            require('../assets/Images/PARTY.png'),
            require('../assets/Images/PARTY.png'),
            require('../assets/Images/PARTY.png'),
            require('../assets/Images/PARTY.png'),
            require('../assets/Images/PARTY.png'),
            require('../assets/Images/PARTY.png'),
            require('../assets/Images/PARTY.png'),
            require('../assets/Images/PARTY.png'),
            require('../assets/Images/PARTY.png'),
            require('../assets/Images/PARTY.png'),
            require('../assets/Images/PARTY.png'),
            require('../assets/Images/PARTY.png')
        ]
    }
  }
}
</script>

<style lang="scss" scoped>
.genreandmood-body{
  color: white;
  font-size: 22px;
  width: calc(100% - 280px);
  height: 100%;
  background-color: #161A1A;
  padding: 100px 140px !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.moods , .genres{
    padding: 50px 0px;
}
.genres-section , .moods-section{
    flex-wrap: wrap;
    width: 100%;
}
.category-item{
    width: 15% !important;
    padding: 10px;
}
.title{
    padding: 18px;
}
@media (max-width: 576px) {
  .genreandmood-body{
    font-size: 22px;
    width: calc(100% - 80px);
    padding: 50px 40px !important;
  }
  .category-item{
    width: 28% !important;
    padding: 5px;
  }
  .title{
      font-size: 16px;
  }
  .moods , .genres{
    padding: 15px 0px;
}
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .genreandmood-body{
    font-size: 22px;
    width: calc(100% - 120px);
    padding: 50px 60px !important;
  }
  .category-item{
    width: 22% !important;
    padding: 5px;
  }
  .title{
      font-size: 19px;
  }
  .moods , .genres{
    padding: 20px 0px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .genreandmood-body{
    font-size: 22px;
    width: calc(100% - 150px);
    padding: 70px 75px !important;
  }
  .category-item{
    width: 17% !important;
    padding: 5px;
  }
  .title{
      font-size: 19px;
  }
  .moods , .genres{
    padding: 25px 0px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .genreandmood-body{
    font-size: 22px;
    width: calc(100% - 200px);
    padding: 100px 100px !important;
  }
  .category-item{
    width: 14% !important;
    padding: 7px;
  }
  .moods , .genres{
    padding: 30px 0px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .genreandmood-body{
    font-size: 22px;
    width: calc(100% - 200px);
    padding: 100px 100px !important;
  }
  .category-item{
    width: 14% !important;
    padding: 7px;
  }
}

@media (min-width: 1600px){
  
}
</style>
