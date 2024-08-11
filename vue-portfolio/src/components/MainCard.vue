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
                <p>Software Developer</p>
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
                <h1>Hello! I am Amish, a software developer based in Nepal.
                     
                </h1>
                <p>I am currently working at BeamLab with Node.js  
                    and Vue.js. 
                    I am <br> interested in creating full stack web applications. </p>
                <p>I can help you solve a problem or build a product, website.</p>
                <div class="mail">
                    <p>
                    Let's chat <a href="mailto:amishbs43@gmail.com" target="_blank">amishbs43@gmail.com</a>
                </p>
                </div>
            </div>
            <div class="skill-section">
                <h1>Skills</h1>
                <p><v-icon name="ViFileTypeNode" scale="1.5"/></p>
                <class class="logo">
                    <p>

                    </p>
                </class>
            </div>
            <div class="button-container">
                <div class="projects-button">
                    <router-link to="/projects">
                        <h2>My Projects</h2>
                    </router-link>
                </div>
                <div class="projects-button">
                    <a href="">
                        <h2>See my Resume</h2>
                    </a>
                </div>
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
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    background-color: #2E3047;
    border-radius: 25px;
    width: 60%;
}

.container-one {
    background-color: #707793;
    width: 30%;
    padding: 2.5%;
    border-radius: 25px;
}
.profile img{
    height: 200px;
    width: 200px;
    border-radius: 50%;
}
.profile p{
    color: rgb(10, 1, 1);
}

.about-me h1{
    color: #3BBA9C;
}

.about-me p{
    color: #707793;
}

.mail a{
    text-decoration: none;
    color: #3BBA9C;
}
.link a{
    text-decoration: none;
    color: #2c3e50;
    font-size: 15px;
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

.skill-section{
    
    color: #d6d6d6;
    padding-top: 2px;
    border-radius: 25px;
}
.button-container{
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.projects-button{
    background-color: #005CA4;
    border-radius: 15px;
    padding: 5px;
    margin: 5px;

}
.projects-button a{
    text-decoration: none;
    color: #fff
}

.skill-section v-icon {
  background-color: #fff;
  margin-right: 10px;
}
</style>