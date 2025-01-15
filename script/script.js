// MODAL ABRIR IMAGEM CARROSSEL INÍCIO 🟢

// Função para abrir o modal
function openModal(imageSrc) {
   const modal = document.getElementById('modal');
   const modalImage = document.getElementById('modalImage');
   modalImage.src = imageSrc; // Define a fonte da imagem do modal
   modal.style.display = 'flex'; // Exibe o modal
}

// Função para fechar o modal
function closeModal() {
   const modal = document.getElementById('modal');
   modal.style.display = 'none'; // Oculta o modal
}

// Função para iniciar o movimento automático do carrossel
function startAutoScroll() {
   scrollCarrossel(scrollDirection); // Chama a função de rolar na direção especificada
}
// MODAL ABRIR IMAGEM CARROSSEL FINAL 🔴



// BARRA ACTIVE NAV ITEM
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-item a");
 
    function updateActiveLink() {
       let currentSection = "";
 
       // Verifica qual seção está visível no viewport
       sections.forEach((section) => {
          const sectionTop = section.offsetTop - 200; // Considera o offset do header
          const sectionHeight = section.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
             currentSection = section.getAttribute("id");
          }
       });
 
       // Atualiza a classe 'active' nos links
       navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").includes(currentSection)) {
             link.classList.add("active");
          }
       });
    }
 
    // Chama a função ao carregar a página e ao fazer scroll
    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink);
 });
// BARRA ACTIVE NAV ITEM FIM 

// CARROSSEL BANNER PRINCIPAL
document.addEventListener('DOMContentLoaded', () => {
   const carouselInner = document.querySelector('.carousel-banner-inner');
   const items = document.querySelectorAll('.carousel-banner-item');
   const prevButton = document.querySelector('.prev-banner');
   const nextButton = document.querySelector('.next-banner');

   let currentIndex = 0;
   const totalItems = items.length;

   // Função para mostrar o slide atual
   function showSlide(index) {
       if (index >= totalItems) {
           currentIndex = 0; // Volta ao início
       } else if (index < 0) {
           currentIndex = totalItems - 1; // Vai para o final
       } else {
           currentIndex = index;
       }

       const offset = -currentIndex * 100; // Calcula o deslocamento
       carouselInner.style.transform = `translateX(${offset}%)`;
   }

   // Eventos para os botões
   prevButton.addEventListener('click', () => {
       showSlide(currentIndex - 1);
   });

   nextButton.addEventListener('click', () => {
       showSlide(currentIndex + 1);
   });

   // Avanço automático a cada 5 segundos
   let autoSlide = setInterval(() => {
       showSlide(currentIndex + 1);
   }, 10000);

   // Parar o avanço automático ao interagir
   [prevButton, nextButton].forEach(button => {
       button.addEventListener('click', () => {
           clearInterval(autoSlide);
           autoSlide = setInterval(() => {
               showSlide(currentIndex + 1);
           }, 10000);
       });
   });
});

// CARROSSEL BANNER

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
ScrollReveal().reveal('.carousel-banner', {
    origin: 'top',   // De onde a animação começa (bottom, top, left, right)
    distance: '100px',   // Distância percorrida pelo elemento
    duration: 1500,     // Duração da animação em milissegundos
    delay: 100,         // Atraso antes de começar a animação
    reset: true         // Se a animação deve ser executada novamente ao rolar para fora e voltar
});
ScrollReveal().reveal('.banner-brands', {
    origin: 'bottom',   // De onde a animação começa (bottom, top, left, right)
    distance: '100px',   // Distância percorrida pelo elemento
    duration: 1500,     // Duração da animação em milissegundos
    delay: 300,         // Atraso antes de começar a animação
    reset: true         // Se a animação deve ser executada novamente ao rolar para fora e voltar
});
ScrollReveal().reveal('.banner-brands-mobile', {
    origin: 'bottom',   // De onde a animação começa (bottom, top, left, right)
    distance: '100px',   // Distância percorrida pelo elemento
    duration: 1500,     // Duração da animação em milissegundos
    delay: 300,         // Atraso antes de começar a animação
    reset: true         // Se a animação deve ser executada novamente ao rolar para fora e voltar
});
ScrollReveal().reveal('.banner-mobile-media', {
    origin: 'bottom',   // De onde a animação começa (bottom, top, left, right)
    distance: '100px',   // Distância percorrida pelo elemento
    duration: 1500,     // Duração da animação em milissegundos
    delay: 600,         // Atraso antes de começar a animação
    reset: true         // Se a animação deve ser executada novamente ao rolar para fora e voltar
});
ScrollReveal().reveal('.carrossel', {
    origin: 'bottom',   // De onde a animação começa (bottom, top, left, right)
    distance: '100px',   // Distância percorrida pelo elemento
    duration: 1500,     // Duração da animação em milissegundos
    delay: 300,         // Atraso antes de começar a animação
    reset: true         // Se a animação deve ser executada novamente ao rolar para fora e voltar
});
ScrollReveal().reveal('.banner-services', {
    origin: 'top',   // De onde a animação começa (bottom, top, left, right)
    distance: '100px',   // Distância percorrida pelo elemento
    duration: 1500,     // Duração da animação em milissegundos
    delay: 100,         // Atraso antes de começar a animação
    reset: true         // Se a animação deve ser executada novamente ao rolar para fora e voltar
});
ScrollReveal().reveal('.catalogo', {
    origin: 'bottom',   // De onde a animação começa (bottom, top, left, right)
    distance: '100px',   // Distância percorrida pelo elemento
    duration: 1500,     // Duração da animação em milissegundos
    delay: 300,         // Atraso antes de começar a animação
    reset: true         // Se a animação deve ser executada novamente ao rolar para fora e voltar
});
ScrollReveal().reveal('.banner-about', {
    origin: 'top',   // De onde a animação começa (bottom, top, left, right)
    distance: '100px',   // Distância percorrida pelo elemento
    duration: 1500,     // Duração da animação em milissegundos
    delay: 300,         // Atraso antes de começar a animação
    reset: true         // Se a animação deve ser executada novamente ao rolar para fora e voltar
});
ScrollReveal().reveal('.about-text', {
    origin: 'bottom',   // De onde a animação começa (bottom, top, left, right)
    distance: '100px',   // Distância percorrida pelo elemento
    duration: 2500,     // Duração da animação em milissegundos
    delay: 500,         // Atraso antes de começar a animação
    reset: true         // Se a animação deve ser executada novamente ao rolar para fora e voltar
});

ScrollReveal().reveal('.store-img', {
    origin: 'bottom',   // De onde a animação começa (bottom, top, left, right)
    distance: '100px',   // Distância percorrida pelo elemento
    duration: 2000,     // Duração da animação em milissegundos
    delay: 1000,         // Atraso antes de começar a animação
    reset: true         // Se a animação deve ser executada novamente ao rolar para fora e voltar
});
ScrollReveal().reveal('.form-and-address', {
    origin: 'bottom',   // De onde a animação começa (bottom, top, left, right)
    distance: '100px',   // Distância percorrida pelo elemento
    duration: 2500,     // Duração da animação em milissegundos
    delay: 300,         // Atraso antes de começar a animação
    reset: true         // Se a animação deve ser executada novamente ao rolar para fora e voltar
});
ScrollReveal().reveal('.banner-contact', {
    origin: 'top',   // De onde a animação começa (bottom, top, left, right)
    distance: '100px',   // Distância percorrida pelo elemento
    duration: 2500,     // Duração da animação em milissegundos
    delay: 300,         // Atraso antes de começar a animação
    reset: true         // Se a animação deve ser executada novamente ao rolar para fora e voltar
});
ScrollReveal().reveal('#whatsapp-button', {
    origin: 'bottom',   // De onde a animação começa (bottom, top, left, right)
    distance: '100px',   // Distância percorrida pelo elemento
    duration: 3000,     // Duração da animação em milissegundos
    delay: 1000,         // Atraso antes de começar a animação
    reset: true         // Se a animação deve ser executada novamente ao rolar para fora e voltar
});
ScrollReveal().reveal('.contacts-links', {
    duration: 3000,     // Duração da animação em milissegundos
    delay: 1000,         // Atraso antes de começar a animação
    reset: true         // Se a animação deve ser executada novamente ao rolar para fora e voltar
});






// // Inicia o EmailJS com a sua Public Key
emailjs.init("rRF9IojEKFXzX0Td3");

// Seleciona o formulário pelo ID e adiciona um event listener ao submit
document.getElementById("budget-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Previne o comportamento padrão de recarregar a página

  // Coleta os dados do formulário
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("budget-text").value,
  };

  // Envia os dados usando o EmailJS
  emailjs.send("service_6r123hi", "template_tqpkcnz", formData)
    .then(function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      document.getElementById("budget-form").reset(); // Reseta o formulário
    })
    .catch(function (error) {
      console.error("FAILED...", error);
      alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.");
    });
});


// BOTÃO MENU MOBILE

document.addEventListener("DOMContentLoaded", function() {
    const buttonBar = document.getElementById('button__bar');
    const mobileMenu = document.querySelector('.mobile-menu');
    


    buttonBar.addEventListener('click', () => {
      buttonBar.classList.toggle('active');
      mobileMenu.classList.toggle('visible');
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        buttonBar.classList.remove('active');
        mobileMenu.classList.remove('visible');
      });
    });
});

// Seleciona o botão e o menu móvel
// const buttonBar = document.getElementById('button__bar');
// const mobileMenu = document.querySelector('.mobile-menu');

// // Adiciona um evento de clique no botão
// buttonBar.addEventListener('click', () => {
//   // Alterna a classe 'active' no botão
//   buttonBar.classList.toggle('active');
  
//   // Alterna a visibilidade do menu móvel
//   mobileMenu.classList.toggle('visible');
// });

// // Fecha o menu ao clicar em um item do menu
// const navLinks = document.querySelectorAll('.nav-link');
// navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     buttonBar.classList.remove('active');
//     mobileMenu.classList.remove('visible');
//   });
// });
// BOTÃO MENU FINAL



// SCROOL PULAR SECTION

const sections = document.querySelectorAll("section");
let currentSection = 0; // Começa na primeira seção

// Função para rolar até a seção desejada
const scrollToSection = (index) => {
  if (index >= 0 && index < sections.length) {
    sections[index].scrollIntoView({ behavior: "auto" }); // Pula direto para a seção
    currentSection = index; // Atualiza a seção atual
  }
};

// Detecta o scroll do mouse
window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    // Scroll para baixo
    scrollToSection(currentSection + 1);
  } else if (event.deltaY < 0) {
    // Scroll para cima
    scrollToSection(currentSection - 1);
  }
});
// SCROOL PULAR SECTION FINAL


// BOTOES PREV NEXT CARROSSEL

const carrosselInner = document.querySelector('.carrossel-inner');
const items = document.querySelectorAll('.carrossel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
const totalItems = items.length;
const intervalTime = 5000;

function updateCarrossel() {
   carrosselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showNext() {
   currentIndex = (currentIndex + 1) % totalItems;
   updateCarrossel();
}

function showPrev() {
   currentIndex = (currentIndex - 1 + totalItems) % totalItems;
   updateCarrossel();
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}


nextButton.addEventListener('click', showNext);
prevButton.addEventListener('click', showPrev);

let autoSlide = setInterval(showNext, intervalTime);

// Parar o auto-slide ao interagir
document.querySelector('.carrossel').addEventListener('mouseenter', () => clearInterval(autoSlide));
document.querySelector('.carrossel').addEventListener('mouseleave', () => autoSlide = setInterval(showNext, intervalTime));



// document.addEventListener("DOMContentLoaded", () => {
//     const carrosselInner = document.querySelector(".carrossel-inner");
//     const prevButton = document.querySelector(".prev");
//     const nextButton = document.querySelector(".next");

//     let currentIndex = 0;
//     let itemsToShow = getItemsToShow();
//     let itemWidth = 100 / itemsToShow;

//     function getItemsToShow() {
//         if (window.innerWidth <= 480) {
//             return 2; // 1 item visível em telas pequenas
//         } else if (window.innerWidth <= 768) {
//             return 2; // 2 itens visíveis em tablets
//         } else {
//             return 5; // 5 itens visíveis em desktops
//         }
//     }

//     function updateCarrossel() {
//         itemsToShow = getItemsToShow(); // Atualiza o número de itens visíveis com base no tamanho da tela
//         itemWidth = 100 / itemsToShow;
//         const offset = -(currentIndex * itemWidth);
//         carrosselInner.style.transform = `translateX(${offset}%)`;
//     }

//     function showPrev() {
//         currentIndex = Math.max(currentIndex - 1, 0);
//         updateCarrossel();
//         resetAutoSlide();
//     }

//     function showNext() {
//         currentIndex = Math.min(currentIndex + 1, carrosselInner.children.length - itemsToShow);
//         updateCarrossel();
//         resetAutoSlide();
//     }

//     function startAutoSlide() {
//         autoSlideInterval = setInterval(() => {
//             currentIndex = (currentIndex + 1) % (carrosselInner.children.length - itemsToShow + 1);
//             updateCarrossel();
//         }, 2000);
//     }

//     function resetAutoSlide() {
//         clearInterval(autoSlideInterval);
//         startAutoSlide();
//     }

//     // Recalcula o layout ao redimensionar a janela
//     window.addEventListener("resize", updateCarrossel);

//     prevButton.addEventListener("click", showPrev);
//     nextButton.addEventListener("click", showNext);

//     updateCarrossel();
//     startAutoSlide();
// });
