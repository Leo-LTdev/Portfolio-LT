<script setup>
import { ref, onMounted } from 'vue';
import { aboutPage } from '@/router';
const welcome = ref(null);
const animDone = ref(false);

onMounted(() => {
  welcome.value?.classList.add('anim')
})

function handleClick() {
  if (animDone.value) return;
  animDone.value = ref(true);
  const elem = welcome.value;
  elem?.classList.add('anim-out');

  animDone.value = ref(true) ? aboutPage() : true
}

</script>

<template>
  <div ref="welcome" class="welcome">
    <img class="welcome__img"></img>
    <div class="welcome__title welcome--fade">
      <h1>TOSCANO Léo<span>Welcome to my site</span></h1>
    </div>
    <div class="welcome__btn welcome--fade">
      <button @click="handleClick">Let's get started</button>
    </div>
  </div>
</template>

<style scoped>
.welcome--fade {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.welcome.anim {
  opacity: 1;
  transform: translateY(0);
}

.welcome.anim-out {
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.6s ease-in;
}

.welcome__title {
  font-size: 30px;
  color: antiquewhite;
}

.welcome button:hover {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}

.welcome button.active {
  background-color: dodgerblue;
  color: white;
}

.welcome button {
  float: left;
  color: rgb(255, 255, 255);
  background: 0;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border: 0;
  border-radius: 5px;
}

.welcome__btn {
  font-size: 18px; 
  line-height: 25px;
  animation-delay: 0.6s;
}

h1 {
  position: relative;
  padding: 0;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 40px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}

h1 span {
  display: block;
  font-size: 0.5em;
  line-height: 1.3;
}
h1 em {
  font-style: normal;
  font-weight: 600;
}

.welcome__title h1 {
  text-align:center; font-size:50px; text-transform:uppercase; color:#ffffff; letter-spacing:1px;
  font-family:"Playfair Display", serif; font-weight:400;
  animation-delay : 0.3s;
}
.welcome__title h1 span {
  margin-top: 5px;
    font-size:15px; color:#ffffff; word-spacing:1px; font-weight:normal; letter-spacing:2px;
    text-transform: uppercase; font-family:"Raleway", sans-serif; font-weight:500;

    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-template-rows: 27px 0;
    grid-gap: 20px;
    align-items: center;
}

.welcome__title h1 span:after,.welcome__title h1 span:before {
    content: " ";
    display: block;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    height: 5px;
}

</style>
