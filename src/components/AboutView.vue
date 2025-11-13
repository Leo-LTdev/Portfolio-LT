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
      <h1>About Me</h1>
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

.about--fade {
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

.about {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2%;
}

.about__title {
  font-size: 30px;
}
</style>
