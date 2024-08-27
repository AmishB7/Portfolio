<script>
import { ViFileTypeNode } from "oh-vue-icons/icons";
import { addIcons, OhVueIcon } from "oh-vue-icons";
import router from "@/router";

addIcons(ViFileTypeNode);

export default {
  components: {
    'v-icon': OhVueIcon
  },
  methods: {
    toggleMenu() {
      const menu = document.querySelector('.menu-links');
      const icon = document.querySelector('.hamburger-icon');
      menu.classList.toggle('active');
      icon.classList.toggle('active');
    }
  }
}
</script>

<template>
    <div class="nav">
      <div class="logo">Amish Bajracharya</div>
      <div class="nav-links">
        <router-link to="/about">About Me</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/experience">Experience</router-link>
        <router-link to="/skills">Skills</router-link>
      </div>
    </div>
  
    <nav id="hamburger-nav">
      <div class="logo">Amish Bajracharya</div>
      <div class="hamburger-menu">
        <div class="hamburger-icon" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="menu-links">
          <li><router-link to="/about" @click="toggleMenu">About Me</router-link></li>
          <li><router-link to="/projects" @click="toggleMenu">Projects</router-link></li>
          <li><router-link to="/experience" @click="toggleMenu">Experience</router-link></li>
          <li><router-link to="/skills" @click="toggleMenu">Skills</router-link></li>
        </div>
      </div>
    </nav>
  
    <section id="profile">
      <div class="section_pic-container">
        <img src='../assets/me.png' alt="profile picture" />
      </div>
      <div class="section_text">
        <p class="section_text_p1">Hello, I'm</p>
        <h1 class="title">Amish Bajracharya</h1>
        <p class="section_text_p2">Software Developer</p>
        <div class="btn-container">
          <button class="btn btn-color-1">
            <a href="https://drive.google.com/file/d/1nqjh2xEeUPxg5gZsCUF5YZ0k8VfdJDJy/view?usp=sharing" target="_blank">
              My Resume
            </a>
          </button>
          <router-link to="/contact">
            <button class="btn btn-color-1">Contact Me</button>
          </router-link>
        </div>
        <div id="socials-container">
          <div class="icon">
            <a href="https://github.com/AmishB7" target="_blank"><img src="../assets/GitHub.png" alt="Github" /></a>
          </div>
          <div class="icon">
            <a href="https://www.linkedin.com/in/amish-bajracharya-349625286/" target="_blank"><img src="../assets/linkedin.png" alt="Linkedin" /></a>
          </div>
          <div class="icon">
            <a href="mailto:amishbs43@gmail.com" target="_blank"><img src="../assets/gmail.jpg" alt="Gmail" /></a>
          </div>
        </div>
      </div>
    </section>
    <!-- <section id="about">
        <p class="section_text_p1">Get To know More</p>
        <h1 class="title">About Me</h1>
        <div class="section-container">
            <div class="section_pic-container">
                <img src='../assets/me.png' alt="profile picture" class="about-pic">
            </div>
            <div class="about-details-container">
                <div class="about-containers">
                    <div class="details-container">
                        <img src="" alt="" class="icon">
                        <h3>Experience</h3>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
  </template>
  

<style scoped>
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 17vh;
}

.nav-links {
  gap: 2rem;
  display: flex;
}

.nav-links a {
  color: #f1f1f1;
  text-decoration: none;
  font-size: 16px;
  font-weight: bolder;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #18BC9C;
}

.logo {
  font-size: 2rem;
}

.logo:hover {
  cursor: default;
}

#hamburger-nav {
  display: none;
}

.hamburger-menu {
  position: relative;
  display: inline-block;
}

.hamburger-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  cursor: pointer;
}

.hamburger-icon span {
  width: 100%;
  display: block;
  height: 2px;
  background: #f1f1f1;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.menu-links {
    position: absolute;
    top: 100%;
    right: 0;
    width: fit-content;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
}


.menu-links a{
    display: block;
    padding: 10px;
    text-align: center;
    font-size: 1.5rem;
    color: #f1f1f1;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

}
.menu-links li {
  list-style: none;
  margin-bottom: 15px;
}

.menu-links.active {
  max-height: 300px;
}

.hamburger-icon.active span:first-child {
  transform: rotate(45deg) translate(10px, 5px);    
}
.hamburger-icon.active span:nth-child(2) {
  opacity: 0;
}
.hamburger-icon.active span:last-child {
  transform: rotate(-45deg) translate(10px, -5px);
}

.hamburger-icon span:first-child {
    transform: none;
}

.hamburger-icon span:first-child{
    opacity: 1;

}

.hamburger-icon span:first-child{
    transform: none;
}

/* sections */

section{
    padding-top: 4vh;
    height: 96vh;
    margin: 0 10rem;
    box-sizing: border-box;
    min-height: fit-content;
}

.section-container{
    display: flex;
}

/* profile Section */

#profile{
    display: flex;
    justify-content: space-around;
    margin: 0 15rem;
    margin-top: -25px;
    gap: 5rem;
    height: 80vh;
}

.section_pic-container{
    display: flex;
    height: 400px;
    width: 400px;
    margin: auto 0;
    border-radius: 50%;
    overflow: hidden;
}

.section_text{
    
    align-self: center;
    text-align: center;
    --bg-size: 300%;
  /* Other */
  --color-one: #18BC9C;
  --color-two: #e1eced;
  --color-three: #dbd8d0;
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
.section_text p{
    font-weight: 600;
}

.section_text_p1{
    text-align: center; 
   
}

.section_text_p2{
    color: #f1f1f1;
    font-size: 2rem;
    margin-bottom: 1rem;
}

@keyframes move-bg {
  to { background-position: var(--bg-size) 0;
  }
}





.title{
    font-size: 3rem;
    text-align: center;
}

#socials-container{
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;

}

/* ICONS */

.icon{
    cursor :pointer;
    height: 2rem;
}

/*buttons */

.btn-container{
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.btn{
    font-weight: 600;
    transition: all 300ms ease;
    padding: 1rem;
    width: 8rem;
    border-radius: 2rem;
    text-decoration: none;
}

.btn-color-1 a{
    text-decoration: none;
    color:#f1f1f1;
}
.btn-color-1,.btn-color-2 {
    border:#18BC9C;
    
}

.btn-color-1:hover, .btn-color-2:hover{
    cursor: pointer;
}

.btn-color-1, .btn-color-2:hover{
    background: #18BC9C;
    color: #f1f1f1;
}

@media (max-width: 1200px) {
  .nav {
    display: none;
  }
  #hamburger-nav {
    display: flex;
    flex-direction: column;
    align-items:center;
  }
}
</style>
