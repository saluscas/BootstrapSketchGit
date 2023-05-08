// Obtém o valor do parâmetro 'slide' da URL
const urlParams = new URLSearchParams(window.location.search);
const slideIndex = parseInt(urlParams.get('slide'));

// Verifica se o valor é válido e se o carousel existe na página
if (!isNaN(slideIndex) && slideIndex >= 0) {
  const carousel = document.querySelector('.carousel');

  if (carousel) {
    // Atualiza a classe do carousel para exibir o slide correspondente
    const slides = carousel.querySelectorAll('.carousel-item');
    if (slides.length > slideIndex) {
      slides.forEach((slide, index) => {
        if (index === slideIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });

      carousel.querySelector('.carousel-indicators button.active').classList.remove('active');
      carousel.querySelectorAll('.carousel-indicators button')[slideIndex].classList.add('active');
    }
  }
}