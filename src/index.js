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


// localStorage.setItem('theme', Theme.LIGHT);
// bodyTheme.classList.add(localStorage.getItem('theme'));

localStorage.setItem('theme', (localStorage.getItem('theme')==null?Theme.LIGHT:localStorage.getItem('theme')));
function createMenuMarkup(menu) {
    return menu.map(templateFunction).join('')
};

themeSwitcher.addEventListener('change', themeToggle);
function themeToggle(params) {
  if (params.target.checked) {
    return localStorage.setItem('theme', Theme.DARK),
     bodyTheme.classList.replace(Theme.LIGHT, Theme.DARK);    
  } bodyTheme.classList.replace(Theme.DARK, Theme.LIGHT),
   localStorage.setItem('theme', Theme.LIGHT);
};

function checkBoxTracking(e) {
  if (localStorage.getItem('theme') === Theme.DARK) {
   return themeSwitcher.checked = true
  };
}
bodyTheme.classList.add(localStorage.getItem('theme'));


document.addEventListener("DOMContentLoaded", checkBoxTracking);
