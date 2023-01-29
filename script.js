var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    naviagtion: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      hide: true,
    },
  })