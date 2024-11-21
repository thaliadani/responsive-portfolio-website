const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const links = document.querySelector('.links');

openMenu.addEventListener('click', () => {  
    links.style.display = 'flex';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    links.style.display = 'none';
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
});