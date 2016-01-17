'use strict';

var $ = require('jQuery');
var owl = require('owlCarousel');

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
