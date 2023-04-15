$(document).ready(function() {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
    scrollTop: target.offset().top
    }, 1000);
    }
    });
    });
    
    // Add active class to top menu item based on scroll position
    $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.section').each(function(index) {
    if ($(this).position().top <= scrollDistance + 100) {
    $('.top-menu a.active').removeClass('active');
    $('.top-menu a').eq(index).addClass('active');
    }
    });
    });
    
    // Toggle mobile menu
    $('.menu-toggle').on('click', function() {
    $('.top-menu ul').toggleClass('show');
    });
    
    // Close mobile menu when a menu item is clicked
    $('.top-menu ul li a').on('click', function() {
    $('.top-menu ul').removeClass('show');
    });