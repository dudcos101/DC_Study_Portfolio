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

// Work Button Click Event
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    projectContainer.classList.add('anim-out');
    /*  
    Same with 
        projects.forEach((project))
        1. for (let project of projects)
        2. for (let i = 0; i < projects.length; i++) {
            project = projects[j];
        }
    */
    setTimeout(() => {
        projects.forEach((project) => {
            if (filter == '*' || filter == project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);
});


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}