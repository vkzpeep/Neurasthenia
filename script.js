function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden'); // Oculta todas as seções
        section.classList.remove('active'); // Remove a classe ativa
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('hidden'); // Mostra a seção selecionada
    activeSection.classList.add('active'); // Adiciona a classe ativa
}

// Exibe a seção Home por padrão
showSection('home');

// Bloqueia o botão direito do mouse
document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Previne a ação padrão do menu de contexto
});

// Bloqueia Ctrl + U
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault(); // Previne a ação padrão de abrir o código fonte
    }
});