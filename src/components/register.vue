<template>
    <div>
        <div class="container" id="container">
            <div class="form-container sign-up-container">
                <form @submit.prevent="doregister">
                    <h1>Create Account</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fa fa-facebook"></i></a>
                        <a href="#" class="social"><i class="fa fa-google"></i></a>
                        <a href="#" class="social"><i class="fa fa-linkedin"></i></a>
                    </div>
                    <span>use your email for registration</span>
                    <input type="email" name="email" id="email" v-model="email">
                    <input type="password" name="password" id="password" v-model="password">
                    <button>Sign up </button>
                </form>
            </div>

            <div class="form-container sign-in-container">
                <form @submit.prevent="dologin">
                    <h1>Sign in</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fa fa-facebook"></i></a>
                        <a href="#" class="social"><i class="fa fa-google"></i></a>
                        <a href="#" class="social"><i class="fa fa-linkedin"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" name="emaillogin" id="emaillogin" v-model="emaillogin">
                    <input type="password" name="passwordlogin" id="passwordlogin" v-model="passwordlogin">
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
                </form>
            </div>

            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back !!!</h1>
                        <button class="ghost" id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, My Friend !!</h1>
                        <button class="ghost" id="signUp" >Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "register",
    data() {
        return {
            email: "",
            password: "",
            emaillogin: "",
            passwordlogin: ""
        }
    },
    components:{},
    methods:{
         dologin: function (){
            this.axios.post("http://localhost:3000/client/login",{
                email:this.emaillogin,
                password:this.passwordlogin
            })
            .then(res =>{
                if(res.data.token){
                    localStorage.setItem("token",res.data.token)
                    this.$router.push({name: 'profil'})
                    window.location.reload();
                }
                else{
                    this.$router.push({name: "register", params: {msg: "non connecté"} })
                }
            })
            .catch(err => {
                console.log(err);
            })

        },
        doregister: function (){
            this.axios.post("http://localhost:3000/client/register",{
                email:this.email,
                password:this.password
            })
            .then(res =>{
                console.log(res);
                if(res.data.token){
                    localStorage.setItem("token",res.data.token)
/* une fois les donnes recperer et stockés il va nous renvoyer sur home */
                   this.$router.push({name: 'Login'})
                   window.location.reload();
                }
                else{
                    this.$router.push({name: "register", params: {msg: "non connecté"} })
                }
            })
            .catch(err => {
                console.log(err);
            })

        },
    },
    mounted(){
        const signUpButton = document.getElementById("signUp");
        const signInButton = document.getElementById("signIn");
        const container = document.getElementById("container");
        signUpButton.addEventListener("click", ()=>{
            container.classList.add("right-panel-active");
        });
         signInButton.addEventListener("click", ()=>{
            container.classList.remove("right-panel-active");
        });

    }
    
}
</script>
<style scoped>
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

h1{
    font-weight: bold;
    margin: 0;
}
span{
    font-size:12px
}
a{
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
}

button{
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background-color: #992BFF ;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px ;
    text-transform: uppercase;
    transition:  transform 80ms ease-in;
}

button:active{
    transform: scale(0.95);
}

button.ghost{
    background-color: transparent;
    border-color: #ffffff;
}
form{
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
}
input{
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
}

.social-container{
    margin: 20px 0;
}

.social-container a {
    border: 1px solid #dddddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
}

.container {
    background-color: #ffffff;
    border-radius:10px ;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
    0 10px 10px 10px rgba(0,0,0, 0.22);
    position: relative;
    overflow: hidden;
    max-width: 90%;
    margin: 0 auto;
    min-height: 480px;
    margin-top: 10%;
}

.form-container{
    position: absolute;
    top: 0;
    height: 100%;
    transition:  all 0.6s ease-in-out;
}
.sign-in-container{
    left:0;
    width: 50%;
    z-index: 2;
}
.sign-up-container{
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.container.right-panel-active .sign-in-container{
    transform: translate(100%);
}

.container.right-panel-active .sign-up-container{
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
}

@keyframes show{
    0%,
    49.99%{
        opacity: 0;
        z-index: 1;
    }
    50%,
    100%{
        opacity: 1;
        z-index: 5;

    }
}

.overlay-container {
    position:absolute;
    top:0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index:100;
}
.container.right-panel-active .overlay-container {
    transform: translateX(-100%);
}

.overlay {
    background: #ff416c;
    background: -webkit-linear-gradient(to right, #ff4b2b,
     #ff416c);
     background: linear-gradient(to right, #ff4b2b, #ff416c);
     background-repeat: no-repeat ;
     background-size: cover;
     background-position: 0 0;
     color: #ffffff;
     position: relative;
     left: -100%;
     height: 100%;
     width: 200%;
     transform: translateX(0);
     transition: transform 0.6s ease-in-out;

}

.container.right-panel-active .overlay{
    transform: translateX(50%);
}

.overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;

}

.overlay-left{
    transform: translateX(-20%);
}
.container.right-panel-active .overlay-left{
    transform: translateX(0);
}

.overlay-right{
    right: 0;
    transform: translateX(0);
}

.container.right-panel-active .overlay-right{
    transform: translateX(20%);
}




</style>