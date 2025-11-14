<script setup>
import Header from './Header.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { eventBus } from '../main.js'

const projects = ref(null)

function startExitAnimation() {
  if (!projects.value) return
  projects.value.classList.add('anim-out')
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
  <div ref="projects" class="wrapper">
    <section class="projects projects--fade" id="projects">
      <h1 class="projects__title">Mes projets</h1>
      <div class="projects__grid">
        <div class="project-card">
          <h3 class="project-card__title">A venir...</h3>
          <p class="project-card__desc">Une application Vue.js avec une interface minimaliste.</p>
        </div>
        <div class="project-card">
          <h3 class="project-card__title">A venir...</h3>
          <p class="project-card__desc"></p>
        </div>
        <div class="project-card">
          <h3 class="project-card__title">A venir...</h3>
          <p class="project-card__desc"></p>
        </div>
        <div class="project-card">
          <h3 class="project-card__title">A venir...</h3>
          <p class="project-card__desc"></p>
        </div>
        <div class="project-card">
          <h3 class="project-card__title">Forum - GO, JS & SQLITE</h3>
          <p>
            Réalisation d'un Forum autour de l'escalade via HTML, CSS, React, JS, SQLITE et Golang.
            Les fonctionalités principale du forum sont :
          </p>
          <li>Réalisation d'une API pour gérer les likes. Api réalisé via Mux en Golang</li>
          <li>Création de compte avec des normes de sécurité</li>
          <li>Gestion du profil et compte complète et intuitive</li>
          <li>Création de posts et commentaires</li>
          <p>Ce projet à été réalisé en 2025 a Ynov</p>
          <a href="https://github.com/corentin-cpp/Forum">Lien vers le Github</a>
        </div>
        <div class="project-card">
          <h3 class="project-card__title">Hangman - GO Web</h3>
          <p>
            Réalisation d'un jeu de pendu en WEB utilisant le language GO, HTML et CSS. Les
            fonctionalités principale du jeu sont :
          </p>
          <li>
            Choix de la difficulté : Trois niveaux disponibles avec words.txt, words2.txt et
            words3.txt avec des fichiers de mots différents.
          </li>
          <li>
            Sauvegarde et chargement : La partie peut être sauvegardée et chargée à tout moment.
          </li>
          <li>ASCII art : Visuel propre avec l'affichage du pendu</li>
          <li>UI : Simple et intuitif</li>
          <p>Ce projet à été réalisé en 2024 a Ynov</p>
          <a href="https://github.com/Stiximir/Hangman-GO-Web">Lien vers le Github</a>
        </div>
      </div>
    </section>
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

.projects--fade {
  opacity: 0;
  transform: translateY(0);
  animation: fadeIn 0.8s forwards;
}

.wrapper {
  transition: all 0.8s ease-out;
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

.projects {
  padding: 2rem;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 22rem;
  row-gap: 3.5rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
  justify-items: center;
}

.projects__title {
  color: white;
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.project-card {
  background-color: #121212;
  color: white;
  padding: 2.5rem;
  height: auto;
  border-radius: 12px;
  border-style: double;
  border-color: #0000006c;
  width: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.project-card a {
  display: flex;
  margin-top: 1rem;
  color: #007bff;
  font: bold;
  justify-content: center;
}

.project-card li,
.project-card p {
  display: flex;
  margin-top: 0.3rem;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.project-card__title {
  margin-bottom: 1.5rem;
  color: #007bff;
}

@media (max-width: 600px) {
  .projects__grid {
    grid-template-columns: repeat(auto-fit, minmax(250px));
    gap: 3rem;
  }
  .project-card {
    width: 400px;
  }
}
</style>
