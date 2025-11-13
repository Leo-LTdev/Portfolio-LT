<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Header from './Header.vue'
import { eventBus } from '../main.js'

const about = ref(null)

function startExitAnimation() {
  if (!about.value) return
  about.value.classList.add('anim-out')
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
  <Header />
  <div ref="about" class="wrapper">
    <div class="about about--fade">
      <h1 class="about__title about--fade">I'm <span>Léo TOSCANO</span></h1>
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
    <img class="about__img about--fade" src="/src/assets/IL_08890.jpg" />
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

.about--fade {
  opacity: 0;
  transform: translateY(0);
  animation: fadeIn 0.8s forwards;
}

.wrapper {
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

.wrapper.anim {
  opacity: 1;
  transform: translateY(0);
}

.wrapper.anim-out {
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.6s ease-in;
}

.about {
  flex: 1;
}

.about p {
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
}
</style>
