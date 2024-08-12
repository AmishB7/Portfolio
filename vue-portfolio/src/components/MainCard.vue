<script>
import { ViFileTypeNode } from "oh-vue-icons/icons";
import { addIcons, OhVueIcon } from "oh-vue-icons";

addIcons(ViFileTypeNode);

export default {
  components: {
    'v-icon': OhVueIcon
  }
}
</script>
<template>
    <div class="wrapper">
        <div class="main-container">
        <div class="container-one">
            <div class="profile">
                <img src="../assets/profile.jpg" alt="Profile-image">
                <h3>Amish Bajracharya</h3>
                <p>Contact Me</p>
            </div>
            <div class="social-links">
                <a href="">
                    <div class="link">
                        
                        <a href="https://github.com/AmishB7" target="_blank"><img src="../assets/Github.png" alt=""><h2>Github</h2></a>
                        
                    </div>
                    <div class="link">
                        
                        <a href="https://www.linkedin.com/in/amish-bajracharya-349625286/" target="_blank"><img src="../assets/linkedin.png" alt=""><h2>Linkedin</h2></a>
                    </div>
                    <div class="link">
                        
                        <a href="https://www.facebook.com/amish.shakyaa/" target="_blank"><img src="../assets/facebook.png" alt=""><h2>Facebook</h2></a>
                    </div>
                    <div class="link">
                        
                        <a href="mailto:amishbs43@gmail.com" target="_blank"><img src="../assets/gmail.jpg" alt=""><h2>Email</h2></a>
                    </div>
                </a>
            </div>
        </div>
        <div class="container-two">
            <div class="about-me">
                <h1> <div class="highlight">Hello! I am Amish,</div>a software developer
                    
                     
                </h1>
                <p>I am currently working at BeamLab with Node.js  
                    and Vue.js. 
                    I am interested in creating full stack web applications. </p>
                <p>I can help you solve a problem or build a product, website.</p>
                <div class="mail">
                    <p>
                    Let's chat <a href="mailto:amishbs43@gmail.com" target="_blank">amishbs43@gmail.com</a>
                </p>
                </div>
            </div>
            <div class="button-container">
                <button class="projects-button">
                    <router-link to="/projects">
                        <h2>My Projects</h2>
                    </router-link>
                </button>
                <button class="projects-button">
                    <a href="">
                        <h2>See my Resume</h2>
                    </a>
                </button>
            </div>
        </div>
    </div>


</div>
</template>    

<style scoped >
.wrapper {
    display: flex;
    justify-content: center;
}

.main-container {
    display: flex;
    flex-direction: row;
    background-color: #2C3E50;
    border-radius: 25px;
    width: 80%;
}

.container-one {
    background-color: #E1D9D1;
    width: 30%;
    padding: 2.5%;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
}
.profile img{
    height: 200px;
    width: 200px;
    border-radius: 50%;
}
.profile p{
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    padding-top: 20px;
}

.about-me h1{
    font-size: 30px;
    --bg-size: 300%;
  /* Other */
  --color-one: #18BC9C;
  --color-two: #189ebc;
  --color-three: #0cecce;
  background: linear-gradient(
      90deg,
      var(--color-one),
      var(--color-two),
      var(--color-three),
      var(--color-one)
    )
    0 0 / var(--bg-size) 120%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: move-bg 15s infinite linear;
}

@keyframes move-bg {
  to { background-position: var(--bg-size) 0;
  }
}

.about-me p{
    color: #EDEADE;
    font-size: 20px;
}

.mail a{
    text-decoration: none;
    color: #3BA9AC;
}
.link a{
    text-decoration: none;
    color: #2c3e50;
    font-size: 12px;
}

.link img{
    height: 2rem;
}
.container-two{
    margin: 2.5%;
    width: 70%;
}
.about-me {
    text-align: left;
}
.logo img{
    height: 2.5rem;
}
.button-container{
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.projects-button{
    background-color: #18BC9C;
    border-radius: 15px;
    padding: 5px;
    margin: 5px;

}
.projects-button a{
    text-decoration: none;
    color: #ECF0F1
}

.highlight{
    font-size: 50px;
}

</style>