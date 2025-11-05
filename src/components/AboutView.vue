<script setup>
import Header from './Header.vue';

</script>

<template>
  <Header />
  <div class="about">
    <h1>Je suis entrain de réaliser mon site portfolio, il sera prêt d'ici le 12 - 13 novembre.</h1>
  </div>
</template>

<style>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.about__title {
  font-size: 30px;
}
</style>
