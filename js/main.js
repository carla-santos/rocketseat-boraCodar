import { desafios } from './data/desafios.js';

function updateView() {
  // 1. Renderizar cards
  const gridContainer = document.querySelector('[data-id="desafio-grid"]');

  const cardsHTML = desafios
    .map((desafio) => {
      const { title, subtitle, image, alt, repoLink, liveLink } = desafio;

      return `
      <div class="card-image-container">
        <img src="${image}" alt="${alt}">
        <div class="absolute inset-0 bg-purple-900/30 group-hover:bg-transparent transition-all duration-300"></div>
      </div>

      <div class="card-content">
        <h2 class="text-xl md:text-2xl text-cyan-400 mb-2 retro-font group-hover:text-pink-500 transition-colors truncate">
          ${title}
        </h2>
        
        <p class="text-gray-400 text-base md:text-lg mb-4 font-sans leading-tight">
          ${subtitle}
        </p>

        <div class="flex items-center mb-6 border-t border-gray-800 pt-4 text-gray-300">
          
        </div>

        <div class="flex gap-4">
          <a href="${repoLink}" target="_blank" class="btn-retro flex-1 justify-center text-sm md:text-base">
            <i class="fab fa-github"></i> Repo
          </a>
          
          <a href="${liveLink}" target="_blank"
            class="btn-retro btn-retro-secondary flex-1 justify-center text-sm md:text-base">
            <i class="fas fa-external-link-alt"></i> Demo
          </a>
        </div>
      </div>
    `;
    })
    .join('');

  gridContainer.innerHTML = cardsHTML;
}

document.addEventListener('DOMContentLoaded', updateView);
