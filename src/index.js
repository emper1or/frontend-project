import './index.css';

const menu = document.querySelector('.mobile-menu__inner');

document.querySelector('.js-menu-active').addEventListener('click', () => {
  menu.classList.toggle('mobile-menu__inner--active');
});
