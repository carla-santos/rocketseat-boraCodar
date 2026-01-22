import { desafios } from './data/desafios.js';
import { createDesafiosCard } from './components/ProjectCard.js';
import { renderPaginationControls } from './components/Pagination.js';

const ITEMS_PER_PAGE = 6;
let currentPage = 1;

const gridContainer = document.querySelector('[data-id="desafio-grid"]');
const paginationContainer = document.getElementById('pagination');

function updateView() {
	// 1. Lógica de negócio: Calcular slice
	const totalPages = Math.ceil(desafios.length / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const paginatedItems = desafios.slice(startIndex, endIndex);

	// 2. Renderizar cards
	gridContainer.innerHTML = '';
	paginatedItems.forEach((desafio, index) => {
		const cardNode = createDesafiosCard(desafio, index);
		gridContainer.appendChild(cardNode);
	});
}

// Estilo de animação
const styleSheet = document.createElement('style');
styleSheet.innerText = `
  @keyframes fadeInUp {
    to { 
      opacity: 1; transform: translateY(0); 
    }
  }
`;
document.head.appendChild(styleSheet);

document.addEventListener('DOMContentLoaded', updateView);
