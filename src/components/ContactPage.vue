<script setup>
import HeaderPage from './HeaderPage.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { eventBus } from '../main.js'

const contact = ref(null)

function startExitAnimation() {
  if (!contact.value) return
  contact.value.classList.add('anim-out')
}

function onRouteChangeRequest() {
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
  <HeaderPage />
  <div ref="contact" class="wrapper">
    <div class="contact contact--fade">
      <h1>Formulaire bientôt disponible</h1>
      <p>Mes réseaux :</p>
      <ul>
        <a href="https://github.com/Leo-LTdev" target="_blank"> <li>Github</li> </a>
        <a href="https://www.linkedin.com/in/l%C3%A9o-toscano-146925341/" target="_blank">
          <li>LinkedIn</li>
        </a>
      </ul>
    </div>
  </div>
</template>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.contact--fade {
  opacity: 0;
  transform: translateY(0);
  animation: fadeIn 0.8s forwards;
}

.wrapper {
  display: flex;
  justify-content: center;
  justify-items: center;
  padding: 2rem;
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

.contact {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 3rem 4rem;
  text-align: center;
  color: #fff;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact h1 {
  font-size: 2rem;
  letter-spacing: 1px;
  font-weight: 600;
  margin: 0;
  color: #5ccfe6;
}

.contact p {
  margin: 0;
  font-size: 1.2rem;
  opacity: 0.9;
}

.contact ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1.1rem;
}

.contact li {
  margin: 0.5rem 0;
  padding: 0.8rem 1.2rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.07);
  transition: 0.3s;
  cursor: pointer;
}

.contact li:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-3px);
}

.contact a {
  margin-top: 1rem;
  color: #007bff;
  font: bold;
  justify-content: center;
}

@media (max-width: 600px) {
  .projects__grid {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .project-card {
    width: 400px;
  }
}
</style>
