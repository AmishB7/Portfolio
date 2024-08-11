import projectCard from './projectCard.vue';
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
                        <img src="../assets/Github.png" alt="">
                        <a href=""><h2>Github</h2></a>
                        
                    </div>
                    <div class="link">
                        <img src="../assets/linkedin.png" alt="">
                        <a href=""><h2>Linkedin</h2></a>
                    </div>
                    <div class="link">
                        <img src="../assets/facebook.png" alt="">
                        <a href=""><h2>Facebook</h2></a>
                    </div>
                    <div class="link">
                        <img src="../assets/gmail.jpg" alt="">
                        <a href=""><h2>Email</h2></a>
                    </div>
                </a>
            </div>
        </div>
        <div class="container-two">
            <div class="about-me">
                <h1>Hey, I am a software<br> developer</h1>
                <p>I can help you solve a problem or build a product, <br> or website.</p>
                <p>
                    Let's chat <a href="mailto:amishbs43@gmail.com">amishbs43@gmail.com</a>
                </p>
            </div>
            <div class="skill-section">
                <h1>Skills</h1>
                <class class="logo">
                    <img src="../assets/skills.png" alt="">
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
                        <h2>My Resume</h2>
                    </a>
                </div>
            </div>
        </div>
    </div>


</div>
</template>    
<script>
import router from '@/router';

export default {

}
</script>

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
    background-color: #1292EE;
    width: 30%;
    padding: 2.5%;
    border-radius: 25px;
}
.profile img{
    height: 200px;
    width: 200px;
    border-radius: 50%;
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
</style>