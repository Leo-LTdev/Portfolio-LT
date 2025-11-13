<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Header from './Header.vue'
import { eventBus } from '../main.js'

const about = ref(null)

function startExitAnimation() {
  if (!about.value) return
  about.value.classList.add('anim-out')
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
  <Header />
  <div ref="about" class="wrapper">
    <div class="about about--fade">
      <h1>I'm Léo TOSCANO</h1>
      <p>a bachelor 2nd year student</p>
    </div>
    <img class="about__img" src="/src/assets/IL_08890.jpg" />
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

.about--fade {
  opacity: 0;
  transform: translateY(0);
  animation: fadeIn 0.8s forwards;
}

.wrapper {
  transition: all 0.8s ease-out;
  padding: 50px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
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

.about {
  color: white;
  display: flex;
  padding: 50px 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2%;
}

.about__title {
  font-size: 30px;
}

.about__img {
  border-radius: 50%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

@media (max-width: 600px) {
  .about__img {
    width: 180px;
    height: 180px;
  }
}

.about__img:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
}
</style>
