var mySwiper = new Swiper ('.swiper-container', {
    observer: true,
    observeParents: true,
    parallax:true,
    loop: true,
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