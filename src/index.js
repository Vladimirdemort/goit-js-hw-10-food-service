import menu from './menu.json';
import './sass/main.scss';
import templateFunction from './template.hbs';


const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menu);
const themeSwitcher = document.querySelector('#theme-switch-toggle');
const bodyTheme = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

menuContainer.insertAdjacentHTML('afterbegin', menuMarkup);
bodyTheme.classList.add('light-theme')
function createMenuMarkup(menu) {
    return menu.map(templateFunction).join('')
};

themeSwitcher.addEventListener('change', themeToggle);
function themeToggle (params) {
    
};
