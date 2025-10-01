// Menu fixo ao rolar
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});








// Menu hambúrguer
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu ul');


toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
