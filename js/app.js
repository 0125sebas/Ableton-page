const dropdownMenu = document.getElementById('dropdown-menu');
const showMenu = document.getElementById('menu-show');
const closeMenu = document.getElementById('menu-close');

showMenu.addEventListener('click', function () {
    dropdownMenu.style.display = 'flex';
    showMenu.style.display = 'none';
    closeMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', function () {
    dropdownMenu.style.display = 'none';
    closeMenu.style.display = 'none';
    showMenu.style.display = 'flex';
});