<template>
    <div class="signup-body">
        <div class="signup-box column-flex center">
            <div class="title row-flex center">
                Ready to sign up?
            </div>
            <input type="email" name="email" placeholder="Email Address">
            <input type="password" name="pass" placeholder="Password">
            <input type="text" name="userName" placeholder="User Name">
            <div class="row-flex item">
                <input type="date" name="birthDate" valu="Birth Date">
                <select id="gender">
                    <option value="">Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="none">Non-Binary</option>
                </select> 
            </div>
            <!-- <div class="g-recaptcha" data-sitekey="Your site key goes here"></div> -->
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
    margin: 40px;
}
input, select{
    border-radius: 4px;
}
input[name = email], input[name = pass], input[name = userName]{
    width: 400px;
    height: 50px;
    margin: 10px;
    border: 1px solid #D5D5D5;
}
.item{
    margin: 10px 10px 100px;
}

select{
    width: 190px;
    height: 50px;
    margin-left: 14px;
    border-color: black;
}
input[name = birthDate]{
    width: 185px;
    height: 46px;
    margin-right: 14px;
    border:  1px solid black;
}
.signup-button {
    background-color: #2D9BEF;
    border-radius: 20px;
    width: 320px;
    height: 40px;
    margin: 20px;
    color: white;
}
@media (max-width: 576px){
    .signup-box{
        border-radius: 15px;
        width: 300px;
        height: 500px;
        margin: 30px;
    }
    .title{
        font-size: 20px;
        margin: 20px;
    }
    input[name = email], input[name = pass], input[name = userName]{
        width: 200px;
        height: 30px;
        margin: 5px;
        border-color: #D5D5D5;
    }
    .item{
        margin: 10px 10px 30px;
    }
    select{
        width: 90px;
        height: 30px;
        margin-left: 14px;
        border-color: black;
    }
    input[name = birthDate]{
        width: 85px;
        height: 26px;
        margin-right: 14px;
        border-color: black;
    }
    .signup-button {
        border-radius: 20px;
        width: 150px;
        height: 40px;
        margin: 20px;
    }
}
@media (min-width: 576px) and (max-width: 768px){
    .signup-box{
        border-radius: 15px;
        height: 600px;
    }
    .title{
        font-size: 20px;
        margin: 20px;
    }
    input[name = email], input[name = pass], input[name = userName]{
        width: 300px;
        height: 40px;
        margin: 10px;
        border-color: #D5D5D5;
    }
    .item{
        margin: 10px 10px 50px;
    }
    select{
        width: 140px;
        height: 40px;
        margin-left: 14px;
        border-color: black;
    }
    input[name = birthDate]{
        width: 135px;
        height: 36px;
        margin-right: 14px;
        border-color: black;
    }
}
</style>