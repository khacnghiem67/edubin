new Swiper('.swipper-category', {
  loop: true,
  slidesPerView: 1,

  navigation: {
    nextEl: '.slider-category-next',
    prevEl: '.slider-category-prev',
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});
