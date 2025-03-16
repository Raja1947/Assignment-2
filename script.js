const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.main-nav');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
