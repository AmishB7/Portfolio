<template>
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
                <h1>About Me</h1>
                <p>I am an undergraduate student pursuing Computer Science.</p>
            </div>
            <div class="skill-section">
                <h1>Skills</h1>
                <class class="logo">
                    <img src="../assets/skills.png" alt="">
                </class>
            </div>
            <div class="button-container">
                <div class="projects-button">
                    <a href="">
                        <h2>Projects</h2>
                    </a>
                </div>
                <div class="projects-button">
                    <a href="">
                        <h2>My Resume</h2>
                    </a>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped >

.main-container {
    display: flex;
    flex-direction: row;
    background-color: #cecece;
    border-radius: 25px;
}

.container-one {
    background-color: #a15a5a;
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
    background-color: #866969;
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
    background-color: #6b5aa1;
    border-radius: 15px;
    padding: 5px;
    margin: 5px;

}
.projects-button a{
    text-decoration: none;
    color: #fff
}
</style>