<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

</script>

<template>
  <div class="wrapper">
    <Header></Header>
    <div class="main">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
} 

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  grid-row: 2;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
