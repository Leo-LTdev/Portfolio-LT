<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  document.querySelector(".welcome").classList.add("anim")
})

</script>

<template>
  <div class="welcome">
    <img class="welcome__img"></img>
    <div class="welcome__title welcome--fade">
      <h1>TOSCANO Léo<span>Welcome to my site</span></h1>
    </div>
    <div class="welcome__btn welcome--fade">
      <router-link to="/about">Let's get started</router-link>
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

.welcome__title {
  font-size: 30px;
  color: antiquewhite;
}

.welcome a:hover {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}

.welcome a.active {
  background-color: dodgerblue;
  color: white;
}

.welcome a {
  float: left;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
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
