const dropdownMenu = document.getElementById('dropdown-menu');
const menu = document.getElementById('nav-mobile__menu--menu');
const menuOpen = document.getElementById('nav-mobile__menu--open');

// when the menu is not open
menu.addEventListener('click', function () {

    menu.style.display = 'none';
    menuOpen.style.display = 'flex';
    dropdownMenu.style.display = 'flex';

});

// when the menu is open
menuOpen.addEventListener('click', function () {

    menuOpen.style.display = 'none';
    menu.style.display = 'flex';
    dropdownMenu.style.display = 'none';

});