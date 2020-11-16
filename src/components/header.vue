<template>
<div class="header">
  <!-- <ham-but class="ham-but"
           :user="userName"></ham-but> -->
  <div class="top-navigation row-reverse-flex">
    <div class="blur-cover"></div>
    <div class="row-reverse-flex">
      <div class="dashboard row-reverse-flex"
           :class="{hide: notAuthenticated}">
        <div class="dashboard-arrow">
          <img src="../assets/Icons/Path 690.svg">
        </div>
        <div class="user-name">John Doe</div>
        <div class="profile-icon">
          <img src="../assets/Icons/Profile.svg">
        </div>
      </div>
      <div class="row-flex authentication-header" 
           :class="{hide: authenticated}">
        <div class="download-item row-flex center">Download</div>
        <div class="help-item row-flex center">Help</div>
        <div class="login-item row-flex center">Log In</div>
        <div class="signup-item active-item row-flex center">Sign Up</div>
      </div>
      <div class="phone-logo">
        <img src="../assets/Full Logo.svg">
      </div>
      <div class="search"
           :class="{hide: notAuthenticated}">
        <input type="search"
               name="search-box"
               placeholder="Search">
      </div>
    </div>
    <div class="playing-music"
         :class="{hide: notAuthenticated}">
    </div>
    <div class="navigation-bar"
         :class="{hide: notAuthenticated}">

    </div>
    <div class="row-reverse-flex">
      <div class="tabs row-reverse-flex"
           :class="{hide: notAuthenticated}">
        <div class="tab tab1">
          <div class="active-tab"
               @click="goToHome">
              Home
          </div>
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
// import HamBut from './hamburgerButton.vue';

export default {
  props: {
    authenticated: Boolean,
    notAuthenticated: Boolean
  },
  data(){
    return{
    }
  },
  methods: {
    goToHome(){
      this.$router.push({
        name: "home"
      })
    }
  },
  created(){
  }
}
</script>

<style lang="scss" scoped>
.hide{
  display: none;
}
.phone-logo{
  display: none !important;
  width: 50px;
  height: 50px;
}
.header{
  position: relative;
}
.authentication-header{
  color: white;
}
.download-item, .help-item, .login-item, .signup-item{
  margin: 0px 20px;
  width: 105px;
  height: 35px;
}
.login-item, .signup-item{
  border: 1px solid white;
  border-radius: 20px;
}
.active-item{
  color: black;
  background-color: white;
}
/* .ham-but{
  display: none !important;
  position: absolute;
  top: -20px;
  left: 0px;
  z-index: 100;
} */
.phone-logo{
  display: block;
}
.top-navigation{
  height: 50px;
  padding: 22px 40px;
  position: relative;
}
.blur-cover{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  backdrop-filter: blur(50px);
  z-index: -1;
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
  color: white;
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

@media (max-width: 576px) {
  /* .ham-but{
    display: block !important;
  } */
  .phone-logo{
    display: block !important;
    margin-right: 30px;
  }
  .tabs, .dashboard, .logo{
    display: none !important;
  }
  input[name="search-box"]::placeholder {
    font-size: 13px;
  }
  .top-navigation{
    height: 40px;
  }
  .dashboard {
    margin-right: 5px;
  }
  input[name="search-box"] {
    width: 50px;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 768px){
  .ham-but{
    display: block !important;
  }
  .phone-logo{
    display: block !important;
    margin-right: 30px;
  }
  .tabs, .dashboard, .logo{
    display: none !important;
  }
  input[name="search-box"]::placeholder {
    font-size: 13px;
  }
  .top-navigation{
    height: 40px;
  }
  .dashboard {
    margin-right: 5px;
  }
  input[name="search-box"] {
    width: 80px;
  }
  .download-item, .help-item, .login-item, .signup-item{
    margin: 0px 5px;
    width: 80px;
    height: 30px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 992px) {
  .tabs{
    font-size: 15px;
    margin-left: 10px;
  }
  input[name="search-box"]::placeholder {
    font-size: 13px;
  }
  .top-navigation{
    height: 40px;
  }
  .dashboard {
    margin-right: 5px;
  }
  input[name="search-box"] {
    width: 80px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px)  and (max-width: 1200px){
  .tabs{
    font-size: 15px;
  }
  input[name="search-box"]::placeholder {
    font-size: 13px;
  }
  .top-navigation{
    height: 40px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  
}

@media (min-width: 1600px){
  
}
</style>
