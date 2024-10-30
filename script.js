let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    
    // Remove a classe 'active' do item atual
    items[currentIndex].classList.remove('active');

    // Atualiza o índice atual com base na direção
    currentIndex += direction;

    // Verifica se o índice está fora dos limites
    if (currentIndex < 0) {
        currentIndex = items.length - 1; // Volta para o último
    } else if (currentIndex >= items.length) {
        currentIndex = 0; // Volta para o primeiro
    }

    // Adiciona a classe 'active' ao novo item atual
    items[currentIndex].classList.add('active');

    // Atualiza a reprodução do áudio
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach((audio, index) => {
        if (index === currentIndex) {
            audio.play(); // Toca a música atual
        } else {
            audio.pause(); // Pausa as outras
        }
    });

    // Move o carrusel visualmente
    const track = document.querySelector('.carousel-track');
    const newPosition = -currentIndex * 100; // Move com base no índice
    track.style.transform = `translateX(${newPosition}%)`;
}
