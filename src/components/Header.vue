<template>
  <div class="header">
    <img class="header_logo" src="/src/assets/text.svg" alt="" />
    <div class="header__background"></div>
    <div class="header__right">
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
  padding: 20px 10px;
  background: #2b26c7;
  background: radial-gradient(circle, rgba(43, 38, 199, 1) 0%, rgba(0, 0, 0, 1) 100%);
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

.header__logo {
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

.header__right {
  margin-right: 1%;
}

.header__background{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 1px;
    width: 1px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: -24vw -44vh 2px 2px #fff,38vw -4vh 0px 0px #fff,-20vw -48vh 1px 2px #fff,-39vw 38vh 3px 1px #fff,-42vw -11vh 0px 3px #fff,12vw 15vh 3px 3px #fff,42vw 6vh 3px 2px #fff,-8vw 9vh 0px 2px #fff,34vw -38vh 1px 0px #fff,-17vw 45vh 3px 1px #fff,22vw -36vh 3px 2px #fff,-42vw 1vh 1px 0px #fff;
    animation: zoom 10s alternate infinite;
}

@keyframes zoom {
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.5);
    }
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: flex;
    text-align: left;
  }
}
</style>
