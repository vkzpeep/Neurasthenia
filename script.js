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

// Lidar com envio de formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('form-message').textContent = "Mensagem enviada com sucesso!";
    document.getElementById('contact-form').reset();
});


