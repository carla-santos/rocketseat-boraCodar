import { desafios } from './data/desafios.js';
import { createDesafiosCard } from './components/projectCard.js';
import { renderPaginationControls } from './components/pagination.js';

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

	// 3. Renderizar Controles de Paginação
	renderPaginationControls(paginationContainer, currentPage, totalPages, handlePageChange);
}

function handlePageChange(newPage) {
	currentPage = newPage;
	updateView();

	// Scroll suave
	const header = document.querySelector('header');
	if (header) {
		const gridTop = header.getBoundingClientRect().bottom + window.scrollY;
		window.scrollTo({ top: gridTop - 50, behavior: 'smooth' });
	}
}

document.addEventListener('DOMContentLoaded', () => {
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

	updateView();
});
