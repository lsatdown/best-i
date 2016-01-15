'use strict';

// Require Gulp, and Gulp Load Plugins
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Require all PostCSS packages
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var cssnano = require('cssnano');

// Store all PostCSS tasks under a processes variable
var processes = [
    cssnext,
    cssnano,
    autoprefixer,
];

// Make the Styles task
gulp.task('styles', function() {
    gulp.src(['styles/*.scss', 'styles/**/*.scss'])
        // Run the SCSS through Sass
        .pipe($.sass({
            precision: 9,
        }))
        // Remove any unused CSS
        // (Being a small, static project, it's a perfect use for uncss.)
        .pipe($.uncss({
            html: 'index.html',
        }))
        // Run PostCSS for polyfilling and optimisation
        .pipe($.postcss(processes))
        // Set Destination
        .pipe(gulp.dest('build/styles'))
        // Send a message to console when the task is completed.
        .pipe($.notify({
            message: 'Styles Completed!',
            onLast: true,
        }))
});
