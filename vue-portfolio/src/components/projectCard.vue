<template>
    <h1>My Projects : </h1>
    <div class="main-container">
        <div class="project-card" v-for="(items,index) in projectData.projects" v-bind:key="items">
        <h2>{{projectData.projects[index].name}}</h2>
        <p>{{projectData.projects[index].description}}</p>
        <div class="link"><a :href="projectData.projects[index].link1" target="_blank"><img src="../assets/facebook.png" alt="project"></a></div>
        

    </div>
    </div>
    
</template>
<script>
import jsonData from '../../projects.json'
export default{
    data(){
        return{
            projectData: jsonData
        }
    }
}
</script>

<style scoped>
.main-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.project-card{
    margin: 10px;
    padding: 10px;
    flex-wrap: 40%;
    background-color: #fff;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.link{
    align-items: center;
}
.link img{
    height: 1.5rem;
    margin: 5px;
}
</style>