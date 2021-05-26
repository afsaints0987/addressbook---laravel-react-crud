// Selector 

const burgerMenu = document.querySelector('.burger-menu');
const list = document.querySelector('.nav-bar-list');

// Event Listener

burgerMenu.addEventListener('click', openMenu);

// Function

function openMenu() {
    list.classList.toggle('show')
}