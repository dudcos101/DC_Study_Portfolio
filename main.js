'use strict';


// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbar_a = document.querySelector('.navbar__logo a')
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
        navbar_a.classList.add('navbar--dark');
    }
    else {
        navbar.classList.remove('navbar--dark');
        navbar_a.classList.remove('navbar--dark');
    }
})

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null)
        return;
    
    scrollIntoView(link);
})

// Handle click on "contact me" button on home
const hmoeContactBtn = document.querySelector('.home__contact');
hmoeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
})

// Make home slowly fade to transparnet as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    //console.log(1 - (window.scrollY / homeHeight));
    home.style.opacity = 1 - window.scrollY / homeHeight; 
})

// Show "arrow-up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () =>  {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    }
    else {
        arrowUp.classList.remove('visible');
    }
})

// Handle click on the "arrow-up" button
arrowUp.addEventListener('click', () => {
    scrollIntoView("#home");
});



function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}