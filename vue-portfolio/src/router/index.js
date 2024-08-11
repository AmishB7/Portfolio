import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/MainCard.vue';
import ProjectCard from '../components/projectCard.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: ProjectCard }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
