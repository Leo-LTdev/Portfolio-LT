<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import HeaderPage from './HeaderPage.vue'
import { eventBus } from '../main.js'

const about = ref(null)
const skills = ref(null)

function startExitAnimation() {
  if (!about.value || !skills.value) return
  about.value.classList.add('anim-out')
  skills.value.classList.add('anim-out')
}

function onRouteChangeRequest() {
  startExitAnimation()
}

onMounted(() => {
  eventBus.addEventListener('route-change-request', onRouteChangeRequest)
})

onBeforeUnmount(() => {
  eventBus.removeEventListener('route-change-request', onRouteChangeRequest)
})
</script>

<template>
  <HeaderPage />
  <div ref="about" class="about">
    <div class="about__container about--fade">
      <h1 class="about__title about--fade">Je suis <span>Léo TOSCANO</span></h1>
      <p>
        Je m’appelle Léo Toscano, étudiant en Bachelor 2 Informatique à Ynov Lyon. Passionné par le
        développement depuis mes 12 ans, j’aime concevoir des applications et des jeux alliant
        performance, créativité et expérience utilisateur.
      </p>
      <p>
        Autodidacte à mes débuts, j’ai ensuite consolidé mes compétences à travers ma formation et
        de nombreux projets concrets. J’aime relever des défis techniques, apprendre de nouvelles
        technologies et améliorer en permanence la qualité de mon code.
      </p>
      <p>
        Mon objectif est de devenir un développeur logiciel capable de créer des solutions
        innovantes, utiles et bien pensées, tout en continuant à progresser dans un environnement
        stimulant et collaboratif.
      </p>
    </div>
    <img
      class="about__img about--fade"
      src="/src/assets/IL_08890-DpAgbvee-CzEq7kEt.webp"
      loading="lazy"
    />
  </div>
  <div ref="skills" class="skills">
    <h2 class="skills__title skills--fade">Mes compétences</h2>
    <div class="skills__container skills--fade">
      <div class="skills__icons skills--fade">
        <img src="/src/assets/htmlcss-Bz_kb_nP.webp" alt="HTML CSS" />
        <img src="/src/assets/js-BBvHBHph.webp" alt="JS" />
        <img src="/src/assets/vue-DrX0Z5OQ.webp" alt="Vue.js" />
        <img src="/src/assets/react-CQj2UL-H.webp" alt="React" />
        <img src="/src/assets/lua-DaabaA2w.webp" alt="Lua" />
        <img src="/src/assets/python-CWs16vkG.webp" alt="Python" />
        <img src="/src/assets/golang-Duwt-Nir.webp" alt="Golang" />
        <img src="/src/assets/java-N89b0Xwv.webp" alt="Java" />
      </div>
      <div class="skills__text skills--fade">
        <p>
          Je maîtrise plusieurs langages et frameworks, me permettant de créer des applications
          performantes et modernes. Je suis particulièrement à l’aise en développement full-stack.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*Animations départ*/

@keyframes fadeIn {
  from {
    opacity: 0.00001;
  }
  to {
    opacity: 1;
  }
}

.about--fade,
.skills--fade {
  opacity: 0.00001;
  transform: translateY(0);
  animation: fadeIn 0.8s forwards;
}

/*Animations fin*/

.skills.anim,
.about.anim {
  opacity: 1;
  transform: translateY(0);
}

.skills.anim-out,
.about.anim-out {
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.6s ease-in;
}

.about {
  transition: all 0.8s ease-out;
  padding: 80px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  max-width: 1100px;
  margin: 0 auto;
  color: #fff;
}

.about__container {
  flex: 1;
}

.about__container p {
  line-height: 1.6;
  font-size: 1.1rem;
  color: #e0e0e0;
  margin-bottom: 15px;
}

.about__title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 25px;
}

.about__title span {
  color: #5ccfe6;
}

.about__img {
  border-radius: 50%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.about__img:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
}

.skills {
  padding: 80px 40px;
  background-color: #121212;
  color: #fff;
}

.skills__title {
  font-size: 2rem;
  margin-bottom: 40px;
  color: #5ccfe6;
  text-align: center;
}

.skills__container {
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.skills__icons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 300px;
}

.skills__icons img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.skills__icons img:hover {
  transform: scale(1.2);
}

.skills__text {
  max-width: 500px;
}

.skills__text p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #e0e0e0;
}

@media (max-width: 600px) {
  .about {
    flex-direction: column-reverse;
    text-align: center;
    gap: 40px;
  }

  .about__content {
    max-width: 90%;
  }

  .about__img {
    width: 200px;
    height: 200px;
  }

  .about__title {
    font-size: 2rem;
  }

  .skills__container {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .skills__text {
    text-align: center;
  }

  .skills__icons img {
    margin: 10px;
  }
}
</style>
