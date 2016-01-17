'use strict';

// Require Gulp, Path, and Gulp Load Plugins
var gulp = require('gulp');
var path = require('path');
var $ = require('gulp-load-plugins')();

gulp.task('scripts', function() {
    gulp.src(['scripts/all.js'], {read: false})
        .pipe($.browserify({
            shim: {
                jQuery: {
                    path: 'scripts/jquery-2.2.0.js',
                    exports: '$',
                },
                owlCarousel: {
                    path: 'scripts/owl.carousel.js',
                    exports: 'owl'
                }
            },
            insertGlobals: false,
            transform: ['debowerify'],
        }))
        .pipe($.uglify())
        .pipe(gulp.dest('build/scripts'))
        .pipe($.notify({
            message: 'Scripts Completed!',
            onLast: true,
        }))
});
