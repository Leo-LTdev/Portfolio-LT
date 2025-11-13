<script setup>
import Header from './Header.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { eventBus } from '../main.js'

const projects = ref(null)

function startExitAnimation() {
  if (!projects.value) return
  projects.value.classList.add('anim-out')
}

function onRouteChangeRequest(e) {
  startExitAnimation()
}

onMounted(() => {
  eventBus.addEventListener('route-change-request', onRouteChangeRequest)
})

onBeforeUnmount(() => {
  eventBus.removeEventListener('route-change-request', onRouteChangeRequest)
})
</script>

<template>
  <Header />
  <div ref="projects" class="wrapper">
    <section class="projects projects--fade" id="projects">
      <h1 class="projects__title">Mes projets</h1>
      <div class="projects__grid">
        <div class="project-card">
          <h3 class="project-card__title">Projet 1</h3>
          <p class="project-card__desc">Une application Vue.js avec une interface minimaliste.</p>
        </div>
        <div class="project-card">
          <h3 class="project-card__title">Projet 2</h3>
          <p class="project-card__desc">Un jeu web simple et amusant développé avec JavaScript.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.projects--fade {
  opacity: 0;
  transform: translateY(0);
  animation: fadeIn 0.8s forwards;
}

.wrapper {
  transition: all 0.8s ease-out;
}

.wrapper.anim {
  opacity: 1;
  transform: translateY(0);
}

.wrapper.anim-out {
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.6s ease-in;
}

.projects {
  padding: 2rem;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
}

.projects__title {
  color: white;
  display: flex;
  justify-content: center;
}

.project-card {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.project-card__title {
  margin-bottom: 0.5rem;
  color: #007bff;
}
</style>
