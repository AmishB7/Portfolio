import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/MainCard.vue";
import ProjectCard from "../components/projectCard.vue";
import ExperienceCard from "@/components/ExperienceCard.vue";
import SkillsCard from "@/components/SkillsCard.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: ProjectCard },
  { path: "/experience", component: ExperienceCard },
  { path: "/skills", component: SkillsCard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
