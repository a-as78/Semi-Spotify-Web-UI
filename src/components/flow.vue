<template>
  <div>
    <div class="header">
      <div class="title"></div>
      <div class="more-options"></div>
    </div>
    <div class="main">
      <div class="section">
        <div class="cover cover1"></div>
        <img class="image"
             src="../assets/Images/Flow cover1.png" alt="cover1">
        <img class="flow-body"
             src="../assets/Images/Flow Body.svg" alt="filter">
        <div class="flow-icon">
          <img src="../assets/Images/Path 368.svg" alt="add">
        </div>
        <div class="flow">
          <div class="flow-info">Your Personal Soundtrack</div>
          <div class="flow-footer">Based on your listening history</div>
        </div>
      </div>
      <div class="section">
        <div class="cover cover2"></div>
        <img class="image"
             src="../assets/Images/Flow cover2.png" alt="cover2">
        <img class="flow-body"
             src="../assets/Images/Flow Body.svg" alt="filter">
        <div class="flow-icon">
          <img src="../assets/Images/Group 1104.svg" alt="add">
        </div>
        <div class="flow">
          <div class="flow-info">Create your own perfect soundtrack</div>
          <div class="flow-footer">Select multiple genres and moods to create the perfect soundtrack</div>
        </div>
      </div>
      <div class="section">
        <div class="cover cover3"></div>
        <img class="image"
             src="../assets/Images/Flow cover3.png" alt="cover3">
        <img class="flow-body"
             src="../assets/Images/Flow Body.svg" alt="filter">
        <div class="flow-icon">
          <img src="../assets/Images/Group 1104.svg" alt="add">
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

<style>
.main{
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}
.section{
  position: relative;
  margin: 20px;
}
.cover{
  width: 370px;
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
.flow{
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 50px;
  right: 10px;
}
.flow-body{
  width: 370px;
  height: 250px;
  position: absolute;
  right: -27px;
  top: 0px;
}
.flow-info{
  color: white;
  align-content: center;
}
.flow-icon{
  background-color: #1C1C1C;
  position: absolute;
  bottom: 41px;
  left: 100px;
  z-index: 2;
  border-radius: 50%;
  padding: 5px;
}
</style>