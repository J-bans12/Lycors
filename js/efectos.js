var swiper = new Swiper(".mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 3,
    breakpoints: {
      1200: { // lg
        slidesPerView: 7,
      },
      992: { // md
        slidesPerView: 5,
      },
      578: { // sm
        slidesPerView: 3,
      }
    }
  });

  var swiper2 = new Swiper(".mySecondSwiper", {
    watchSlidesProgress: true,
    slidesPerView: 2, // Cambiado a 2 para pantallas pequeñas
    breakpoints: {
      1200: { // lg
        slidesPerView: 6,
      },
      992: { // md
        slidesPerView: 5,
      },
      578: { // sm
        slidesPerView: 3, // Cambiado a 2 para pantallas pequeñas
      }
    }
  });