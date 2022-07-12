// pop up video
const btnPopUp = $('.pop-up-btn');
const video = $('.video');
const turnOffBtn = $('.turn-off-btn');
const videoBg = $('.video-bg');

btnPopUp.addEventListener('click', (e) => {
  e.preventDefault();
  video.classList.remove('hidden');
  $('body').classList.add('overflow-hidden');
});

turnOffBtn.addEventListener('click', () => {
  video.classList.add('hidden');
  $('body').classList.remove('overflow-hidden');
  $('#iframe').src = $('#iframe').src;
});

videoBg.addEventListener('click', (e) => {
  video.classList.add('hidden');
  $('body').classList.remove('overflow-hidden');
  $('#iframe').src = $('#iframe').src;
});
