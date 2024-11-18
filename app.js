const menuImg = document.querySelector('.menu-img');
const navLinks = document.querySelector('.navlinks');
const overlay = document.querySelector('.overlay');
const menuClose = document.querySelector('.close-img');

menuClose.addEventListener('click', () => {
  overlay.classList.remove('visible');
  navLinks.classList.remove('open-menu');
  menuClose.style.display = 'none';
  menuImg.style.display = 'flex';
});


menuImg.addEventListener('click', () => {
  overlay.classList.add('visible');
  navLinks.classList.add('open-menu');
  menuClose.style.display = 'flex';
  menuImg.style.display = 'none';
});


window.addEventListener('resize', () => {
  if (window.innerWidth > 768) { 
    overlay.classList.remove('visible');
    navLinks.classList.remove('open-menu');
    menuClose.style.display = 'none';
    menuImg.style.display = 'none'; 
  } else { 
    menuImg.style.display = 'flex'; 
  }
});
