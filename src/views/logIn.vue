<template>
    <div class="signup-body">
        <div class="signup-box column-flex center">
            <div class="title row-flex center">
                What will you listen to today?
            </div>
            <validation-observer ref="loginForm">
                <validation-provider class="column-flex"
                                     rules="required|phone-number">
                    <input type="text"
                           name="phoneNumber"
                           v-model="userInfo.phoneNumber"
                           placeholder="Phone Number">
                </validation-provider>
                <validation-provider class="column-flex"
                                     rules="required">
                    <input type="password"
                           name="passwrod"
                           v-model="userInfo.password"
                           placeholder="Password">
                </validation-provider>
            </validation-observer>
            <div class="row-flex center login-box">
                <input type="checkbox" name="remember">
                    <label class="remember" for="remember"> Remember me</label>
                <div class="login-button row-flex center"
                     @click="login">
                     Log In
                </div>
            </div>
            <div class="column-flex center forget">
                <a href="">Forgot your password?</a>
            </div>
            <div class="column-flex center">
                <div>Have you already an account? </div>
                <div class="signup-button row-flex center">SIGN UP FOR MUSICBOX</div>
            </div>
        </div>
    </div>
</template>

<script>
import { LOGIN } from '../store/actions.type'
import { ValidationObserver, ValidationProvider } from 'vee-validate';


export default {
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data(){
        return {
            userInfo: {
                firstName : "",
                lastName : "",
                phoneNumber: "",
                password: "",
                photo: "",
                email: ""
            }
        }
    },
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
      document.head.appendChild(recaptchaScript)
    },
    methods: {
        async login(){
            console.log("login method called")
            const validated = await this.$refs.loginForm.validate();
            console.log(validated)
            if(validated){
                await this.$store.dispatch(LOGIN , this.userInfo)
            }
        }
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
input{
    border-radius: 4px;
}
input[name = phoneNumber], input[name = pass]{
    width: 400px;
    height: 50px;
    margin: 10px;
    border-color: #D5D5D5;
}
.remember{
    color: #99999F;
}
.forget{
    margin: 50px;
}
.signup-button {
    background-color: white;
    border: 1px solid black;
    border-radius: 20px;
    width: 320px;
    height: 40px;
    margin: 20px;
    color: black;
}
.login-button {
    background-color: #2D9BEF;
    border-radius: 20px;
    width: 150px;
    height: 40px;
    margin: 20px 0px 20px 150px;
    color: white;
}
.login-box{
    justify-content: space-between;
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
    input[name = phoneNumber], input[name = pass]{
        width: 200px;
        height: 30px;
        margin: 5px;
        border-color: #D5D5D5;
    }
    .signup-button {
        border-radius: 20px;
        width: 150px;
        height: 40px;
        margin: 20px;
    }
    .login-button {
        width: 70px;
        margin-left: 20px;
        border-radius: 17px;
    }
    .signup-button{
        width: 200px;
        font-size: 14px;
    }
    .forget{
        margin: 30px
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
    input[name = phoneNumber], input[name = pass]{
        width: 300px;
        height: 40px;
        margin: 10px;
        border-color: #D5D5D5;
    }
    .login-button {
        margin-left: 50px;
    }
}
</style>