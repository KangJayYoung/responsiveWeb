$(function () {
  $("nav a").click(function (e) {
    $.scrollTo(this.hash || 0, 1500);
    e.preventDefault();
  });
});

const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});