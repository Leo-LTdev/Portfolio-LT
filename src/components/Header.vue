<template>
  <div class="header">
    <img class="header__logo" src="/src/assets/text.svg" alt="" />
    <div class="header__right">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  overflow: hidden;
  padding: 20px 10px;
  background: var(--vt-c-divider-light-2); 
  justify-content: space-between;
  display: flex;
  border-radius: 2px;
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

.header__logo {
  font-size: 25px;
  font-weight: bold;
  margin-left: 5vh;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
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
    margin-left:1vh ;
  }
}
</style>
