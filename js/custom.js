AOS.init();

// Owl Carousel Start
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});

var navbarCloseBtn = document.getElementById('navbar-close');
var hamburgerBtn = document.getElementById('hamburger');
var navbar = document.getElementById('navbar');
var toggleIcons = document.getElementById('toggle-icons');
var leftCircles = document.getElementById('left-circles');
var logos = document.getElementsByClassName('logo');
var footerLogos = document.getElementsByClassName('footer-logo');


navbarCloseBtn.addEventListener('click', function(){
    navbar.classList.toggle("open");
})

hamburgerBtn.addEventListener('click', function(){
    navbar.classList.toggle("open");
})

toggleIcons.addEventListener('click', function(){
    let currTheme = document.documentElement.getAttribute("data-theme"); 
    if(currTheme == 'light'){
        document.documentElement.setAttribute('data-theme', 'dark')
        leftCircles.setAttribute('src', 'img/side-circles.png');

        for(var i = 0; i < logos.length; i++){
            logos[i].setAttribute('src', 'img/logo-light.png');
        }

        for(var i = 0; i < footerLogos.length; i++){
            footerLogos[i].setAttribute('src', 'img/logo-light.png');
        }
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        leftCircles.setAttribute('src', 'img/side-circles__light.png');
        
        for(var i = 0; i < logos.length; i++){
            logos[i].setAttribute('src', 'img/logo-dark.png');
        }
        
        for(var i = 0; i < footerLogos.length; i++){
            footerLogos[i].setAttribute('src', 'img/logo-dark.png');
        }
    }
   
})