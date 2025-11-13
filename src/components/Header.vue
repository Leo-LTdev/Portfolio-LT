<script setup>
import { ref, onMounted } from 'vue'
import { aboutPage, homePage, projectPage, contactPage } from '@/router'
import { eventBus } from '../main.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const header = ref(null)
const animDone = ref(false)

onMounted(() => {
  header.value?.classList.add('anim')
})

function handleClickHome() {
  if (animDone.value) return
  animDone.value = ref(true)
  const elem = header.value
  elem?.classList.add('anim-out')

  navigateWithExit(homePage())
}

function handleClickAbout() {
  if (animDone.value) return
  if (router.currentRoute.value.path === '/about') return
  animDone.value = ref(true)
  const elem = header.value
  elem?.classList.add('anim-out')

  navigateWithExit(aboutPage())
}

function handleClickProj() {
  if (animDone.value) return
  if (router.currentRoute.value.path === '/project') return
  animDone.value = ref(true)
  const elem = header.value
  elem?.classList.add('anim-out')

  navigateWithExit(projectPage())
}

function handleClickContact() {
  if (animDone.value) return
  if (router.currentRoute.value.path === '/contact') return
  animDone.value = ref(true)
  const elem = header.value
  elem?.classList.add('anim-out')

  navigateWithExit(contactPage())
}

function navigateWithExit() {
  eventBus.dispatchEvent(new CustomEvent('route-change-request'))
}
</script>

<template>
  <div ref="header" class="wrapper-header">
    <div class="header header--fade">
      <img class="header__logo" src="/src/assets/text.svg" alt="" />
      <div class="header__right">
        <button @click="handleClickHome">Home</button>
        <button @click="handleClickAbout">About</button>
        <button @click="handleClickProj">Projects</button>
        <button @click="handleClickContact">Contact</button>
      </div>
    </div>
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

.header--fade {
  opacity: 0;
  transform: translateY(0);
  animation: fadeIn 0.8s forwards;
}

.wrapper-header {
  transition: all 0.8s ease-out;
}

.wrapper-header.anim {
  opacity: 1;
  transform: translateY(0);
}

.wrapper-header.anim-out {
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.6s ease-in;
}

.header {
  overflow: hidden;
  padding: 20px 10px;
  background: var(--vt-c-divider-light-2);
  justify-content: space-between;
  display: flex;
  border-radius: 2px;
}

.header button {
  float: left;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
  background: 0;
  border: 0;
}

.header__logo {
  font-size: 25px;
  font-weight: bold;
  margin-left: 5vh;
}

.header button:hover {
  background-color: #ddd;
  color: black;
}

.header button.active {
  background-color: dodgerblue;
  color: white;
}

.header__right {
  font-size: 18px;
  line-height: 25px;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: flex;
    text-align: left;
    font-size: 15px;
    line-height: 13px;
    border-radius: 4px;
  }

  .header__logo {
    margin-left: 1vh;
  }
}
</style>
