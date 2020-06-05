const buttonShare = document.querySelector('#button-share');
const popover = document.querySelector('.popover');
const mMenu = document.querySelector('.m-menu');
const menuSidebar = document.querySelector('.menu-sidebar');

buttonShare.addEventListener('click', () => {
    popover.classList.toggle('popover-active');
})

mMenu.addEventListener('click', () => {
    menuSidebar.classList.toggle('show');
})