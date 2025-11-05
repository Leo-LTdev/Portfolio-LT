<script setup>


</script>

<template>
  <div class="welcome">
    <div class="nine">
      <h1>TOSCANO Léo<span>Welcome to my site</span></h1>
    </div>
    <div class="welcome__btn">
      <router-link to="/about">Let's get started</router-link>
    </div>
  </div>
</template>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.welcome__title {
  font-size: 30px;
}

.welcome a:hover {
  background-color: #ddd;
  color: black;
}

.welcome a.active {
  background-color: dodgerblue;
  color: white;
}

.welcome a {
  float: left;
  color: black;
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

.nine h1 {
  text-align:center; font-size:50px; text-transform:uppercase; color:#222; letter-spacing:1px;
  font-family:"Playfair Display", serif; font-weight:400;
}
.nine h1 span {
  margin-top: 5px;
    font-size:15px; color:#444; word-spacing:1px; font-weight:normal; letter-spacing:2px;
    text-transform: uppercase; font-family:"Raleway", sans-serif; font-weight:500;

    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-template-rows: 27px 0;
    grid-gap: 20px;
    align-items: center;
}

.nine h1 span:after,.nine h1 span:before {
    content: " ";
    display: block;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    height: 5px;
  background-color:#f8f8f8;
}

</style>
