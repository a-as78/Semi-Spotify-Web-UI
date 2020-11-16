<template>
    <div class="signup-body">
        <div class="signup-box column-flex center">
            <div class="title row-flex center">
                Ready to sign up?
            </div>
            <input type="email" name="email" placeholder="Email Address">
            <input type="password" name="pass" placeholder="Password">
            <input type="text" name="userName" placeholder="User Name">
            <div class="row-flex">
                <input type="date">
                <!-- <select id="date-of-birth">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>  -->
                <select id="gender">
                    <option value="">Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="none">No binary gender</option>
                </select> 
            </div>
            <div class="g-recaptcha" data-sitekey="Your site key goes here"></div>
            <div class="column-flex center">
                <div>By clicking on sign up you accept</div>
                <a href="">the terms and lob lob lob</a>
            </div>
            <div class="signup-button row-flex center">Sign Up</div>
            <div class="row-flex center">
                <div>Have you already an account? </div>
                <a href="">Log in</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
      document.head.appendChild(recaptchaScript)
    }
}
</script>

<style scoped>
.signup-body{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #161A1A;
}
.signup-box{
    background-color: white;
    border-radius: 8px;
    width: 500px;
    height: 700px;
    margin: 100px;
}
.title{
    font-size: 30px;
    width: 100%;
}
input[name = email], input[name = pass], input[name = userName]{
    width: 80%;
    height: 50px;
    margin: 10px;
}
.signup-button {
    background-color: lightblue;
    border-radius: 15px;
    width: 100px;
    height: 30px;
}
</style>