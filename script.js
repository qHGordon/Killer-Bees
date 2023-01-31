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

  window.addEventListener("scroll", function() {
    var body = document.body;
    var elementTarget = document.getElementById("scr");
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
      body.classList.add("scrollnow");
    } else {
      body.classList.remove("scrollnow");
    }
  });