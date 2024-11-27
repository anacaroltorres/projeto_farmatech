const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function updateCarousel() {
  items.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
}

// Adicione controles para alternar entre as imagens
setInterval(nextSlide, 3000); // Troca automática a cada 3 segundos

// Inicializando o ScrollReveal (título principal)
ScrollReveal().reveal('.titulo-geral', {
  duration: 1000,  // Duração da animação (em milissegundos)
  distance: '50px',  // Distância que o elemento se move durante a animação
  easing: 'ease-out',  // Tipo de easing (transição suave)
  opacity: 0,  // Começar invisível
  delay: 300,  // Atraso antes da animação começar
  reset: true,  // Permite que o efeito se repita quando o elemento sair da tela
});

 // Inicializando o ScrollReveal (cards)
 ScrollReveal().reveal('.card', {
  duration: 1000,    // Tempo da animação
  origin: 'left',    // Início da animação (esquerda)
  distance: '50px',   // Distância do movimento
  easing: 'ease-in-out', // Tipo de suavização
  interval: 200      // Intervalo entre os cards
});


// Inicializando o ScrollReveal (título ecommerce)
ScrollReveal().reveal('.titulo-geral-ecommerce', {
  duration: 1000,  // Duração da animação (em milissegundos)
  distance: '50px',  // Distância que o elemento se move durante a animação
  easing: 'ease-out',  // Tipo de easing (transição suave)
  opacity: 0,  // Começar invisível
  delay: 300,  // Atraso antes da animação começar
  reset: true,  // Permite que o efeito se repita quando o elemento sair da tela
});

// Inicializando o ScrollReveal (imagem ecommerce)
ScrollReveal().reveal('.img-ecommerce', {
  duration: 1000,    // Tempo da animação
  distance: '50px',   // Distância do movimento
  opacity: 0,  // Começar invisível
  easing: 'ease-out', // Efeito de suavização
  delay: 300         // Atraso antes da animação
});

// Inicializando o ScrollReveal (titulo - "how is ai related to health services")
ScrollReveal().reveal('.titulo-transparente', {
  duration: 1000,    // Tempo da animação
  origin: 'left',    // Início da animação (esquerda)
  distance: '50px',   // Distância do movimento
  easing: 'ease-out', // Tipo de suavização
  opacity: 0,  // Começar invisível
  delay: 300,  // Atraso antes da animação começar
  reset: true,  // Permite que o efeito se repita quando o elemento sair da tela
  interval: 200      // Intervalo entre os cards
});


 // Inicializando o ScrollReveal (titulos - telepharmacy and aplications)
 ScrollReveal().reveal('.titulo-telefarmacia', {
  duration: 1000,    // Tempo da animação
  origin: 'left',    // Início da animação (esquerda)
  distance: '50px',   // Distância do movimento
  easing: 'ease-out', // Tipo de suavização
  opacity: 0,  // Começar invisível
  delay: 300,  // Atraso antes da animação começar
  reset: true,  // Permite que o efeito se repita quando o elemento sair da tela
  interval: 200      // Intervalo entre os cards
});

ScrollReveal().reveal('.titulo-apps', {
  duration: 1000,    // Tempo da animação
  origin: 'left',    // Início da animação (esquerda)
  distance: '50px',   // Distância do movimento
  easing: 'ease-out', // Tipo de suavização
  opacity: 0,  // Começar invisível
  delay: 300,  // Atraso antes da animação começar
  reset: true,  // Permite que o efeito se repita quando o elemento sair da tela
  interval: 200      // Intervalo entre os cards
});

// Inicializando o ScrollReveal (icones dos aplicativos)
ScrollReveal().reveal('.container-botoes', {
  duration: 1000,  // Tempo da animação em milissegundos
  origin: 'bottom', // De onde o efeito de entrada virá
  distance: '50px',  // Distância do movimento
  opacity: 0,        // Opacidade inicial
  delay: 200,        // Delay para começar o efeito
  reset: true,      // Faz com que o efeito aconteça novamente ao rolar para os cards
  easing: 'ease-out',
});


 // Inicializando o ScrollReveal (titulo AI)
ScrollReveal().reveal('.titulo-ai', {
  duration: 1000,    // Tempo da animação
  origin: 'top',     // Origem do movimento (de cima)
  distance: '50px',   // Distância do movimento
  easing: 'ease-out', // Efeito de suavização
  opacity: 0,  // Começar invisível
  delay: 300,  // Atraso antes da animação começar
  reset: true,  // Permite que o efeito se repita quando o elemento sair da tela
  delay: 300         // Atraso antes da animação
});

// Inicializando o ScrollReveal (titulo sustentabilidade)
ScrollReveal().reveal('.titulo-sustentabilidade', {
  duration: 1000,    // Tempo da animação
  origin: 'top',     // Origem do movimento (de cima)
  distance: '50px',   // Distância do movimento
  easing: 'ease-out', // Efeito de suavização
  opacity: 0,  // Começar invisível
  delay: 300,  // Atraso antes da animação começar
  reset: true,  // Permite que o efeito se repita quando o elemento sair da tela
  delay: 300         // Atraso antes da animação
});

// Inicializando o ScrollReveal (titulo our team)
ScrollReveal().reveal('.titulo-apresentacao', {
  duration: 1000,    // Tempo da animação
  origin: 'left',     // Origem do movimento (de cima)
  distance: '50px',   // Distância do movimento
  easing: 'ease-out', // Efeito de suavização
  opacity: 0,  // Começar invisível
  delay: 300,  // Atraso antes da animação começar
  reset: true,  // Permite que o efeito se repita quando o elemento sair da tela
  delay: 300         // Atraso antes da animação
});

// Inicializando o ScrollReveal (paragrafos da apresentação)
ScrollReveal().reveal('.paragrafo', {
  duration: 1000,    // Tempo da animação
  origin: 'left',     // Origem do movimento (de cima)
  distance: '50px',   // Distância do movimento
  easing: 'ease-out', // Efeito de suavização
  opacity: 0,  // Começar invisível
  delay: 300,  // Atraso antes da animação começar
  reset: true,  // Permite que o efeito se repita quando o elemento sair da tela
  delay: 300         // Atraso antes da animação
});

// Inicializando o ScrollReveal (paragrafos da apresentação)
ScrollReveal().reveal('.titulo-referencias', {
  duration: 1000,    // Tempo da animação
  origin: 'left',     // Origem do movimento (de cima)
  distance: '50px',   // Distância do movimento
  easing: 'ease-out', // Efeito de suavização
  opacity: 0,  // Começar invisível
  delay: 300,  // Atraso antes da animação começar
  reset: true,  // Permite que o efeito se repita quando o elemento sair da tela
  delay: 300         // Atraso antes da animação
});



