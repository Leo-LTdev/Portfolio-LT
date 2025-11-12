<script setup>
import Header from './Header.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { eventBus } from '../main.js';

const contact = ref(null);

function startExitAnimation() {
  if (!contact.value) return;
  contact.value.classList.add('anim-out');
}

function onRouteChangeRequest(e) {
  startExitAnimation();
}

onMounted(() => {
  eventBus.addEventListener('route-change-request', onRouteChangeRequest);
});

onBeforeUnmount(() => {
  eventBus.removeEventListener('route-change-request', onRouteChangeRequest);
});
</script>

<template>
  <Header />
  <div ref="contact" class="wrapper">
    <div class="contact contact--fade">
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
</style>