let toggleBtn = document.querySelector('.toggle');
let elNav = document.querySelector('.header__nav');

toggleBtn.addEventListener('click', () => {
  elNav.classList.toggle('nav-open');

  toggleBtn.classList.toggle('toggle-close');
});
