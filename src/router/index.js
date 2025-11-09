import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../components/AboutView.vue"
import ProjectPage from '@/components/ProjectPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/proj',
      name: 'proj',
      component: ProjectPage,
    },
  ],
})

export function aboutPage() {
  setTimeout(() => {
    router.push("/about");
  }, "1000");
}

export function homePage() {
  setTimeout(() => {
    router.push("/");
  }, "1000");
}

export function projectPage() {
  setTimeout(() => {
    router.push("/about");
  }, "1000");
}


export default router
