const dropdownMenu = document.getElementById('dropdownMenu');
const showMenu = document.getElementById('span--showMenu');
const closeMenu = document.getElementById('span--closeMenu');

showMenu.addEventListener('click', function () {
    showMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    dropdownMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', function () {
    closeMenu.style.display = 'none';
    showMenu.style.display = 'block';
    dropdownMenu.style.display = 'none';
});

