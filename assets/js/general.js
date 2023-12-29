const navbarMobileButton = document.querySelector('.navbar-mobile-menu-button');
const navbarMobileMenuLinks = document.querySelector('.navbar-mobile-links');
navbarMobileButton.addEventListener('click', () => {
    navbarMobileButton.classList.toggle('active');
    navbarMobileMenuLinks.classList.toggle('active');
  });
  
