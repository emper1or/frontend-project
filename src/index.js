import './index.css';

const menu = document.querySelector('.mobile-menu__inner');
const openMenuButton = document.querySelector('.js-menu-active');
const closeMenuButton = document.querySelector('.js-menu-close');

openMenuButton.addEventListener('click', () => {
  menu.classList.toggle('mobile-menu__inner--active');
});

closeMenuButton.addEventListener('click', () => {
  menu.classList.remove('mobile-menu__inner--active');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  if (
    !menu.contains(event.target) &&
    !openMenuButton.contains(event.target) &&
    menu.classList.contains('mobile-menu__inner--active')
  ) {
    menu.classList.remove('mobile-menu__inner--active');
  }
});
