<template>
  <div class="body">
    <div class="header">
      <div class="title"></div>
      <div class="more-options"></div>
    </div>
    <div class="main">
      <div class="section remove-section1">
        <div class="cover cover1"></div>
        <div class="image-section">
          <img class="image"
              src="../assets/Images/Flow cover1.png" alt="cover1">
          <div class="flow-icon">
            <img class="play-button" 
                 src="../assets/Images/Path 368.svg" 
                 alt="play">
          </div>
        </div>
        <img class="flow-body"
             src="../assets/Images/Flow Body.svg" alt="filter">
        <div class="flow">
          <div class="flow-info">Your Personal Soundtrack</div>
          <div class="flow-footer">Based on your listening history</div>
        </div>
      </div>
      <div class="section remove-section2">
        <div class="cover cover2"></div>
        <img class="image"
             src="../assets/Images/Flow cover2.png" alt="cover2">
        <img class="flow-body"
             src="../assets/Images/Flow Body.svg" alt="filter">
        <div class="flow-icon">
          <img class="button" src="../assets/Images/Group 1104.svg" alt="add">
        </div>
        <div class="flow">
          <div class="flow-info">Create your own perfect soundtrack</div>
          <div class="flow-footer">Select multiple genres and moods to create the perfect soundtrack</div>
        </div>
      </div>
      <div class="section remove-section3">
        <div class="cover cover3"></div>
        <img class="image"
             src="../assets/Images/Flow cover3.png" alt="cover3">
        <img class="flow-body"
             src="../assets/Images/Flow Body.svg" alt="filter">
        <div class="flow-icon">
          <img class="button" src="../assets/Images/Group 1104.svg" alt="add">
        </div>
        <div class="flow">
          <div class="flow-info">Create your own concert with your favorite singers</div>
          <div class="flow-footer">Select multiple artists to create the perfect soundtrack</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
.body{
  width: 100%;
}
.main{
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}
.section{
  position: relative;
  margin: 20px;
  width: 30%;
}
.cover{
  width: 100%;
  height: 250px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  filter: blur(1px);
}
.cover1{
  background-image: url("../assets/Images/Flow cover1.png");
}
.cover2{
  background-image: url("../assets/Images/Flow cover2.png");
}
.cover3{
  background-image: url("../assets/Images/Flow cover3.png");
}
.image{
  width: 130px;
  height: 130px;
  position: absolute;
  bottom: 60px;
  left: 50px;
  z-index: 1;
}
.image-section{
  position: relative;
}
.flow{
  width: 40%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 50px;
  right: 27px;
}
.flow-body{
  /* width: 370px; */
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0px;
  top: 0px;
}
.flow-info{
  height: 20px;
  color: white;
  align-content: center;
  font-size: 12px;
  text-align: center;
  /* margin-bottom: 50px; */
}
.flow-footer{
  font-size: 10px;
  text-align: center;
  color: #D5D5D5;
}
.flow-icon{
  background-color: #1C1C1CB3;
  position: absolute;
  bottom: 41px;
  left: 100px;
  z-index: 2;
  border-radius: 50%;
  padding: 10px;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button{
  width: 23px;
}
.play-button{
  width: 18px;
  padding-left: 2px;
}

@media only screen and (max-width: 576px) {
  .section{
    width: 246px;
  }
  .flow-body{
    right: -15px;
  }
  .cover{
    height: 170px;
  }
  .image{
    height: 85px;
    width: 85px;
    bottom: 40px;
    left: 30px;
  }
  .flow-icon{
    width: 15px;
    height: 15px;
    left: 55px;
    bottom: 22px;
  }
  .flow{
    bottom: 18px;
  }
  .flow-info{
    margin-top: 10px;
    font-size: 10px;
  }
  .flow-footer{
    font-size: 9px;
  }
  .remove-section2 , .remove-section3{
    display: none;
  }
  .button{
    width: 15px;
  }
  .button{
    width: 18px;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media only screen and (min-width: 576px) and (max-width: 768px) {
  .section{
    width: 350px;
  }
  .flow-body{
    right: -31px;
  }
  .cover{
    height: 230px;
  }
  .image{
    height: 120px;
    width: 120px;
    bottom: 55px;
    left: 40px;
  }
  .flow-icon{
    width: 25px;
    height: 25px;
    left: 80px;
    bottom: 35px;
  }
  .flow{
    bottom: 20px;
  }
  .flow{
    height: 110px;
  }
  .flow-info{
    margin-top: 10px;
  }
  .remove-section2, .remove-section3{
    display: none;
  }
  .button{
    width: 18px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media only screen and (min-width: 768px) and (max-width: 992px) {
  .section{
    width: 300px;
  }
  .flow-body{
    right: -31px;
  }
  .cover{
    height: 187px;
  }
  .image{
    height: 100px;
    width: 100px;
    bottom: 45px;
    left: 40px;
  }
  .flow-icon{
    width: 20px;
    height: 20px;
    left: 70px;
    bottom: 20px;
  }
  .flow{
    bottom: 20px;
  }
  .flow-info{
    margin-top: 10px;
  }
  .remove-section2{
    display: none;
  }
}

/* Large devices (desktops, 992px and up) */
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .section{
    width: 246px;
  }
  .flow-body{
    right: -15px;
  }
  .cover{
    height: 170px;
  }
  .image{
    height: 85px;
    width: 85px;
    bottom: 40px;
    left: 30px;
  }
  .flow-icon{
    width: 15px;
    height: 15px;
    left: 55px;
    bottom: 22px;
  }
  .flow{
    bottom: 18px;
  }
  .flow-info{
    margin-top: 10px;
    font-size: 10px;
  }
  .flow-footer{
    font-size: 9px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media only screen and (min-width: 1200px) and (max-width: 1600px){
  .section{
    width: 300px;
  }
  .flow-body{
    right: -31px;
  }
  .cover{
    height: 187px;
  }
  .image{
    height: 100px;
    width: 100px;
    bottom: 45px;
    left: 40px;
  }
  .flow-icon{
    width: 20px;
    height: 20px;
    left: 70px;
    bottom: 20px;
  }
  .flow{
    bottom: 20px;
  }
  .flow-info{
    margin-top: 10px;
  }
}

@media (min-width: 1600px){
  .flow-body{
    right: -40px;
  }
  .section{
    width: 396px;
  }
}

</style>