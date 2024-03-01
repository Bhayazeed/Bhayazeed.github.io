let iconMenu = document.querySelector('#icon-menu');
let navbar = document.querySelector('.navbar');

iconMenu.onclick = () => {
    iconMenu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    iconMenu.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};


const typed = new Typed('.multiple-text',{
    strings:['FrontEnd Developer', 'Junior Developer', 'BackEnd Developer'],
    typeSpeed: 70,
    backSpeed: 60,
    backDelay : 1000,
    loop: true,
});

ScrollReveal({
    distance: '80px',
    duration : 2000,
    delay : 200,
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, projects-box, .contact-form', {origin: 'bottom'});
ScrollReveal().reveal('.home-contact h1', {origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});















