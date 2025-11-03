<template>
  <div class="header">
    <img class="logo" src="/src/assets/text.svg" alt="Tranche de pamplemousse sur une pile d'autres tranches" />
    test
    <div class="header-right">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
  justify-content: space-between;
  display: flex;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

.logo {
  font-size: 25px;
  font-weight: bold;
  margin-left: 1%;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  margin-right: 1%;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: flex;
    text-align: left;
  }
}
</style>
