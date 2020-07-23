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


navbarCloseBtn.addEventListener('click', function(){
    navbar.classList.toggle("open");
})

hamburgerBtn.addEventListener('click', function(){
    navbar.classList.toggle("open");
})