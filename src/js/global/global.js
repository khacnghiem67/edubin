// scroll to top
const scrollBlock = $('.scroll-to-top');

scrollBlock.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

window.addEventListener('scroll', (e) => {
  if (window.pageYOffset > 200) {
    scrollBlock.classList.remove('invisible');
  } else {
    scrollBlock.classList.add('invisible');
  }
});
