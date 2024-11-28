$(document).ready(function () {
    // Toggle the navigation menu when the hamburger icon is clicked
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');  // Toggle the icon to 'X'
        $('.navbar').toggleClass('nav-toggle');  // Toggle the visibility of the navbar
        console.log('Hamburger icon clicked!');
    });

    // Add 'header-active' class when scrolling down
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 30) {
            $('header').addClass('header-active');
        } else {
            $('header').removeClass('header-active');
        }
    });
    
});

