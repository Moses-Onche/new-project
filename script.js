const darkMode = document.querySelector('.change-style');
const toggle = document.querySelector('.dark-mode');
const menu = document.querySelector('.side-menu');
const menuDrop = document.querySelector('.menu-drop');
let inDarkMode = true;
let menuIsOpen = true;
console.log(menuDrop);

toggle.addEventListener('click', () => {
    if (inDarkMode) {
        darkMode.setAttribute('href', 'style-light.css')
        toggle.setAttribute('src', 'sun.png')
        inDarkMode = false;
    } else {
        darkMode.setAttribute('href', 'style-dark.css')
        toggle.setAttribute('src', 'moon.png')
        inDarkMode = true;
    }
})

menu.addEventListener('click', () => {
    if (menuIsOpen) {
        menu.setAttribute('src', 'close-light.png')
        menuDrop.style.display = 'flex';
        menuIsOpen = false;
    } else {
        menu.setAttribute('src', 'open-light.png')
        menuDrop.style.display = 'none';
        menuIsOpen = true;
    }
})
