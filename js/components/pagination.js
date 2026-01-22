export function renderPaginationControls(container, currentPage, totalPages, onPageChange) {
	console.log(container);
	console.log(currentPage); // 1
	console.log(totalPages); // 2

	if (totalPages <= 1) return;

	const createButton = (content, isDisabled, onClick, additionalClasses = '') => {
		const btn = document.createElement('button');
		btn.className = `page-btn ${additionalClasses}`;
		btn.innerHTML = content;
		btn.disabled = isDisabled;
		if (!isDisabled) btn.onclick = onClick;
		return btn;
	};

	// Botão Anterior
	container.appendChild(
		createButton(
			'<i class="fas fa-chevron-left"></i>',
			currentPage === 1,
			() => onPageChange(currentPage - 1),
			'page-nav-btn',
		),
	);

	// Botões Numéricos
	for (let i = 1; i <= totalPages; i++) {
		container.appendChild(
			createButton(i, false, () => onPageChange(i), i === currentPage ? 'active' : ''),
		);
	}

	// Botão Próximo
	container.appendChild(
		createButton(
			'<i class="fas fa-chevron-right"></i>',
			currentPage === totalPages,
			() => onPageChange(currentPage + 1),
			'page-nav-btn',
		),
	);
}
