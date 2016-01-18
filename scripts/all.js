'use strict';

// Require additional scripts
var $ = require('jQuery');
var owl = require('owlCarousel');

// Add settings for Owl Carousel
$('#post-carousel').owlCarousel({
    loop: true,
    reponsiveClass: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
        },
        800: {
            items: 3,
            dots: false,
        }
    }
});

// Add basic toggle for the mobile navigation
$('.mobile-navigation-toggle').on('click', function() {
    var target = $(this).attr('href');
    $(target).toggleClass('is-open');
    return false;
});
