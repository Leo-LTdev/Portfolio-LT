<script setup>
import HeaderPage from './HeaderPage.vue'
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
  <HeaderPage />
  <div ref="projects" class="wrapper">
    <section class="projects projects--fade" id="projects">
      <h1 class="projects__title">Mes projets</h1>
      <div class="projects__grid">
        <div class="project-card">
          <h3 class="project-card__title">Forum d'escalade</h3>
          <p>
            Réalisation d'un Forum autour de l'escalade via HTML, CSS, React, JS, SQLITE et Golang.
          </p>
          <p>Fonctionalités principales :</p>
          <ul>
            <li>Réalisation d'une API pour gérer les likes. Api réalisé via Mux en Golang</li>
            <li>Création de compte avec des normes de sécurité recommandé par la CNIL</li>
            <li>Gestion du profil et du compte complète et intuitive</li>
            <li>Création de posts et commentaires</li>
          </ul>
          <p>Ce projet à été réalisé en 2025 a Ynov en groupe de 5</p>
          <a href="https://github.com/corentin-cpp/Forum" target="_blank"> Lien vers le Github </a>
        </div>
        <div class="project-card">
          <h3 class="project-card__title">Site Portfolio – Vue.js</h3>
          <p>
            Développement d’un site portfolio moderne en utilisant les technologies Vue.js,
            JavaScript, HTML, CSS et un environnement Node.js / Vite pour le tooling et la
            compilation.
          </p>
          <p>Fonctionnalités principales :</p>
          <ul>
            <li>Routing dynamique avec Vue Router (navigation sans rechargement de page)</li>
            <li>Composants réutilisables pour une structure propre et évolutive</li>
            <li>Transitions et animations fluides entre les pages</li>
            <li>Design responsive pour une compatibilité mobile et desktop</li>
            <li>Déploiement sur un hébergement OVH</li>
          </ul>
          <p>Ce projet a été réalisé en 2025 en autonomie.</p>
          <a href="https://github.com/Leo-LTdev/Portfolio-LT" target="_blank">
            Lien vers le GitHub
          </a>
        </div>
        <div class="project-card">
          <h3 class="project-card__title">Groupie-Tracker - Mini-jeux WEB</h3>
          <p>
            Concevoir une plateforme web codée en Go et HTML/CSS, Sqlite, avec JavaScript utilisé
            uniquement pour la gestion du temps réel.
          </p>
          <p>Fonctionalités principales :</p>
          <ul>
            <li>Créer et gérer des comptes utilisateurs</li>
            <li>Lancer et rejoindre des jeux multijoueurs</li>
            <li>Intégrer des APIs externes pour récupérer des informations musicales</li>
            <li>Jouer au Deaf Test, Blind Test et Petit BAC</li>
          </ul>
          <p>Ce projet a été réalisé en 2025 à Ynov en groupe de 5.</p>
          <a href="https://github.com/Leo-LTdev/Groupie-tracker" target="_blank">
            Lien vers le GitHub
          </a>
        </div>
        <div class="project-card">
          <h3 class="project-card__title">Hangman - GO Web</h3>
          <p>Réalisation d'un jeu de pendu en WEB utilisant le language GO, HTML et CSS.</p>
          <p>Fonctionalités principales :</p>
          <ul>
            <li>
              Choix de la difficulté : Trois niveaux disponibles avec words.txt, words2.txt et
              words3.txt avec des fichiers de mots différents.
            </li>
            <li>
              Sauvegarde et chargement : La partie peut être sauvegardée et chargée à tout moment.
            </li>
            <li>ASCII art : Visuel propre avec l'affichage du pendu</li>
            <li>UI : Simple et intuitif</li>
          </ul>
          <p>Ce projet à été réalisé en 2024 a Ynov seul</p>
          <a href="https://github.com/Leo-LTdev/Hangman-GO-Web" target="_blank">
            Lien vers le Github
          </a>
        </div>
        <div class="project-card">
          <h3 class="project-card__title">Réseau de trains - Java</h3>
          <p>Réalisation d'un réseau de trains fait en Java programmation orienté objet.</p>
          <p>Fonctionalités principales :</p>
          <ul>
            <li>Créer des trains, ajouter des wagons et en retirer.</li>
            <li>Différents types de wagons (voitures et marchandise) et la locomotive.</li>
            <li>Gares disponibles pour le déplacement.</li>
            <li>Menu complet en console pour la gestion.</li>
          </ul>
          <p>Ce projet a été réalisé en 2025 à Ynov seul</p>
          <a href="" target="_blank"> Lien vers le GitHub (à venir)</a>
        </div>
        <div class="project-card">
          <h3 class="project-card__title">Projets JavaScript</h3>
          <p>
            Réalisation de multiples projets JavaScript (Sortable, Boxxle, Rhythm Frenzy) visant à
            développer la logique, l’algorithmie et la création d’interfaces interactives.
          </p>
          <p>Fonctionalités principales :</p>
          <ul>
            <li>Manipulation avancée du DOM</li>
            <li>Architecture modulaire en JS</li>
          </ul>
          <p>Projets réalisés en 2025 à Ynov.</p>
          <a href="" target="_blank">Lien vers le GitHub (à venir)</a>
        </div>
        <div class="project-card">
          <h3 class="project-card__title">Projets Lua (Garry's Mod)</h3>
          <p>
            Modification et création d’addons pour Garry's Mod en Lua. Travail basé sur la
            personnalisation de mécaniques de jeu et la création d’interfaces in-game.
          </p>
          <p>Fonctionalités principales :</p>
          <ul>
            <li>Création de systèmes d’addons personnalisés</li>
            <li>Interaction avec l’API du moteur Source</li>
            <li>Conception d’interfaces utilisateur in-game</li>
            <li>Scripts orientés gameplay</li>
          </ul>
          <p>Projets réalisés en autonomie entre 2022 et 2024.</p>
        </div>
        <div class="project-card">
          <h3 class="project-card__title">Bot Discord – Python</h3>
          <p>
            Développement d’un bot Discord en Python utilisant la librairie discord.py, capable de
            gérer des commandes, des profils utilisateurs et des fonctionnalités automatisées.
          </p>
          <p>Fonctionalités principales :</p>
          <ul>
            <li>Gestion des utilisateurs et permissions</li>
            <li>Système d'administration</li>
          </ul>
          <p>Projet réalisé en 2021 en autonomie.</p>
          <a href="https://github.com/Leo-LTdev/Discord-bot" target="_blank">
            Lien vers le GitHub
          </a>
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
  background-color: rgba(255, 255, 255, 0.05);
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

@media (max-width: 1300px) {
  .projects__grid {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .project-card {
    width: 800px;
  }
}

@media (max-width: 800px) {
  .projects__grid {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .project-card {
    width: 600px;
  }
}

@media (max-width: 600px) {
  .projects__grid {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .project-card {
    width: 400px;
  }
}
</style>
