function navSlide(){
    const nav = document.querySelector('.navbar-list');
    const navLinks = document.querySelectorAll('.navbar-list li');
    //Toggle nav
    nav.classList.toggle('nav-active');

    //Animate links
    navLinks.forEach((link,index) => {
        link.style.animation = `navLinkFade 0.5s ease forwords ${index / 7 + 2}s`
    });
} 