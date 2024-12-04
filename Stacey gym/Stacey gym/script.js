var menu_on = 0;
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.navlinks');
const hambMenu = document.querySelector('.hamburger');
const menuClose = document.querySelector('.close-menu');

const closeMenu = document.getElementById('menu-close');

menuToggle.addEventListener('click', function() {
    navLinks.classList.add('open');
    hambMenu.style.display = 'none';
    menuClose.style.display = 'block';
    
});

closeMenu.addEventListener('click', function() {
    navLinks.classList.remove('open');
    hambMenu.style.display = 'block';
    menuClose.style.display = 'none';
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 850) {
        navLinks.classList.remove('open');
        hambMenu.style.display = 'none';
        menuClose.style.display = 'none';
    } else {
        hambMenu.style.display = 'block';
    }
});
