<template>
<div>
  <div class="top-navigation row-reverse-flex">
    <div class="row-reverse-flex">
      <div class="dashboard row-reverse-flex">
        <div class="dashboard-arrow">
          <img src="../assets/Icons/Path 690.svg">
        </div>
        <div class="user-name">John Doe</div>
        <div class="profile-icon">
          <img src="../assets/Icons/Profile.svg">
        </div>
      </div>
      <div class="search">
        <input type="search"
               name="search-box"
               placeholder="Search">
      </div>
    </div>
    <div class="playing-music">

    </div>
    <div class="navigation-bar">

    </div>
    <div class="row-reverse-flex">
      <div class="tabs row-reverse-flex">
        <div class="tab tab1">
          <div class="active-tab">Home</div>
        </div>
        <div class="tab tab2">Library</div>
        <div class="tab tab3">Browse</div>
      </div>
      <div class="logo">
        <img src="../assets/Full Logo.svg">
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
.top-navigation{
  height: 50px;
  background-color: #161A1A;
  filter: blur(3);
  padding: 22px 40px;
}
.dashboard{
  margin-right: 49px;
}
.user-name{
  color: white;
  font-size: 16px;
  padding: 0px 6px 0px 12px;
}
input[name="search-box"]{
  background-color: #898B91;
  width: 130px;
  height: 15px;
  border-radius: 80px;
  background-image: url('../assets/Icons/Search.svg');
  background-position: 15px 10px; 
  background-repeat: no-repeat;
  padding: 10px 40px;
  border: none;
}
input[name="search-box"]::placeholder {
  color: white;
}
.search{
  margin-right: 30px;
}
.tabs{
  color: #99999F;
  font-size: 18px;
  margin-left: 40px;
}
.active-tab{
  border: 1px solid none;
  background-color: #161A1A;
  border-radius: 40px;
  padding: 2px 20px 5px 20px;
  border: 1px;
}
.tab{
  margin: 0px 14px;
}
.tab1{
  background: linear-gradient(to right, #2D9BEF, #9B2DEF);
  padding: 1px;
  border-radius: 40px;
}
</style>
