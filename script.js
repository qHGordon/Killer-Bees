var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 50,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  })