const carousel = document.querySelector('.carousel');
    const slides = carousel.querySelector('.carousel__slides');
    const indicators = carousel.querySelectorAll('.carousel__indicator');
    const slideCount = slides.childElementCount;
    let currentIndex = 0;

    setInterval(() => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateCarousel();
    }, 4000);

    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
    });

    function updateCarousel() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add('carousel__indicator--active');
        } else {
          indicator.classList.remove('carousel__indicator--active');
        }
      });
    }