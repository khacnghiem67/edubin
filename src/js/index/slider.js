new Swiper('.swipper-slider', {
  loop: true,
  effect: 'fade',
  speed: 1000,
  fadeEffect: {
    crossFade: true,
  },

  navigation: {
    nextEl: '.slider-prev',
    prevEl: '.slider-next',
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  on: {
    transitionStart: function () {
      const activeSlide = $('.swiper-slider-slide.swiper-slide-active');
      const title = activeSlide.querySelector('.slide-slider-title');
      const para = activeSlide.querySelector('.slide-slider-para');
      const btns = activeSlide.querySelectorAll('.slide-slider-btn');

      title.style.animation = null;
      para.style.animation = null;
      btns.forEach((btn) => {
        btn.style.animation = null;
      });
      requestAnimationFrame(() => {
        title.style.animation = 'moveFromLeft 1s ease-out both';
        para.style.animation = 'moveFromBottom 1s ease-out 0.5s both';
        btns[0].style.animation = 'moveFromBottom 1s ease-out 0.5s both';
        btns[1].style.animation = 'moveFromBottom 1s ease-out 1s both';
      });
    },
  },
});
