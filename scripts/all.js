'use strict';

var $ = require('jQuery');
var owl = require('owlCarousel');

$('#posts-carousel').owlCarousel({
    items: 1,
    loop: true,
    reponsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        800: {
            items: 3,
        }
    }
});
