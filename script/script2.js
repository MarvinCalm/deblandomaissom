


// BOTÃO WPP
document.addEventListener("DOMContentLoaded", () => {
    console.log("Botão de WhatsApp carregado!");
});

// ANIMAÇÃO SCROLL REVEAL
ScrollReveal().reveal('#header', {
    origin: 'top',   // De onde a animação começa (bottom, top, left, right)
    distance: '50px',   // Distância percorrida pelo elemento
    duration: 3000,     // Duração da animação em milissegundos
    delay: 400,         // Atraso antes de começar a animação
    reset: true         // Se a animação deve ser executada novamente ao rolar para fora e voltar
});


ScrollReveal().reveal('.banner-som-auto', {
    origin: 'top',   // De onde a animação começa (bottom, top, left, right)
    distance: '100px',   // Distância percorrida pelo elemento
    duration: 2500,     // Duração da animação em milissegundos
    delay: 300,         // Atraso antes de começar a animação
    reset: true         // Se a animação deve ser executada novamente ao rolar para fora e voltar
});
ScrollReveal().reveal('.text-som-auto', {
    origin: 'bottom',   // De onde a animação começa (bottom, top, left, right)
    distance: '100px',   // Distância percorrida pelo elemento
    duration: 2500,     // Duração da animação em milissegundos
    delay: 300,         // Atraso antes de começar a animação
    reset: true         // Se a animação deve ser executada novamente ao rolar para fora e voltar
});
ScrollReveal().reveal('.img-som-auto', {
    origin: 'left',   // De onde a animação começa (bottom, top, left, right)
    distance: '100px',   // Distância percorrida pelo elemento
    duration: 2500,     // Duração da animação em milissegundos
    delay: 300,         // Atraso antes de começar a animação
    reset: true         // Se a animação deve ser executada novamente ao rolar para fora e voltar
});



// BOTÃO MENU MOBILE

// Seleciona o botão e o menu móvel
const buttonBar = document.getElementById('button__bar');
const mobileMenu = document.querySelector('.mobile-menu');

// Adiciona um evento de clique no botão
buttonBar.addEventListener('click', () => {
  // Alterna a classe 'active' no botão
  buttonBar.classList.toggle('active');
  
  // Alterna a visibilidade do menu móvel
  mobileMenu.classList.toggle('visible');
});

// Fecha o menu ao clicar em um item do menu
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    buttonBar.classList.remove('active');
    mobileMenu.classList.remove('visible');
  });
});
// BOTÃO MENU FINAL
