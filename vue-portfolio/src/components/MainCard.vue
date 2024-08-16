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
                <img src="../assets/me.png" alt="Profile-image">
                <h3>Amish Bajracharya</h3>
                <p>Software Developer</p>
                <p>Nepal</p>
            </div>
            <div class="navbar">
                    <router-link to="/"><img src="../assets/person.png" alt="About Me">About Me</router-link>
                <router-link to="/projects"><img src="../assets/project.png" alt="Experiencce">Projects</router-link>
                <router-link to="/experience"><img src="../assets/experience.png" alt="About Me">Experience</router-link>
                <router-link to="/skills"><img src="../assets/skills.png" alt="">Skills</router-link>
                
            
                

            </div>
            <div class="social-links">
                    <div class="link">
                        
                        <a href="https://github.com/AmishB7" target="_blank"><img src="../assets/GitHub.png" alt="Github"></a>
                        
                    </div>
                    <div class="link">
                        
                        <a href="https://www.linkedin.com/in/amish-bajracharya-349625286/" target="_blank"><img src="../assets/linkedin.png" alt="Linkedin"></a>
                    </div>
                    <div class="link">
                        
                        <a href="https://www.facebook.com/amish.shakyaa/" target="_blank"><img src="../assets/facebook.png" alt="Facebook"></a>
                    </div>
                    <div class="link">
                        
                        <a href="mailto:amishbs43@gmail.com" target="_blank"><img src="../assets/gmail.jpg" alt="Gmail"></a>
                    </div>
                
            </div>
        </div>
        <div class="container-two">
            <div class="about-me">
                <h1> <div class="highlight">Hello! I'm Amish,</div>a software developer
                    
                     
                </h1>
                <p>Currently working at BeamLab with Node.js  
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
                    <a href="https://drive.google.com/file/d/1nqjh2xEeUPxg5gZsCUF5YZ0k8VfdJDJy/view?usp=sharing" target="_blank">
                        <h2>See My Resume</h2>
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
    padding: 10px;
}

.main-container {
    display: flex;
    flex-direction: row;
    background-color: #2C3E50;
    border-radius: 25px;
    width: 60%;
    max-width: 1200px;
}

.container-one {
    background-color: #E1D9D1;
    width: 30%;
    max-width: 350px;
    padding: 10px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
    color: #2c3e50;
    font-size: 16px;
    font-weight: bold;
}
.profile h3{
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}
.profile img{
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin-top: 20px;
}
.profile p{
    color: #314253;
    font-size: 15px;
    margin-top: -10px;
}
.navbar {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    
}

.navbar a {
    color: #224a33;
    text-decoration: none;
    padding: 10px 0;
    font-size: 16px;
    font-weight: bolder;
    transition: color 0.3s ease;
}

.navbar a:hover {
    color: #18BC9C;
}
.navbar img{
    height: 16px;
    width: 16px;
    margin-right: 10px;
}

.navbar a:hover img {
    transform: scale(1.1); 
    filter: brightness(1.3); 
}
.highlight{
    font-size: 45px;
}
.about-me h1{
    font-size: 40px;
    --bg-size: 300%;
  /* Other */
  --color-one: #18BC9C;
  --color-two: #18a9bc;
  --color-three: #ecb40c;
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
    font-family: 'Merriweather', serif;
    font-weight: 400;
    font-style: normal;
}

.mail a{
    text-decoration: none;
    color: #3BA9AC;
}
.social-links {
    display: flex;
    flex-direction: row;
    justify-content: space-around; 
    margin-top: 30px; 
}

.link {
    display: inline-flex;
    align-items: center;
    margin: 0 10px;
}
.link img{
    height: 20px;
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
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.projects-button{
    background-color: #18BC9C;
    border-radius: 15px;
    transition: color 0.3s ease;
}
.projects-button a{
    text-decoration: none;
    color: #ECF0F1;
    font-size: 12px;
    
    
    
}

.projects-button a:hover{
    color: #2C3E50;
}



@media (max-width: 768px) {
    .wrapper {
        padding: 0;
    }
    .main-container {
        flex-direction: row;
        width: 100%;
    } 
    
    .profile img {
        height: 80px;
        width: 80px;
    }
    .container-one {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
    }
    .profile h3{
        font-size: 12px;
    }
    .profile p{
        margin-top: 2px;
        font-size: 10px;
    }
    .navbar {
        margin-top: 5px;
    }
    .navbar a {
        font-size: 10px; 
    }
    
    .navbar img{
        height: 12px;
        width: 12px;
        margin-right: 5px;
    }

    .highlight{
        font-size: 25px;

    }
    .about-me h1 {
        padding-top: 5px;
        font-size: 22px; 
    }

    .about-me p {
        font-size: 14px; 
        
    }

    .link {
        margin: 0 5px;
    }
    
    .link img{
        height: 10px;

    }
    
    .button-container {
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 20px;
    }


    .projects-button a{
        font-size: 8px;
    }
  
}
</style>