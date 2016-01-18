'use strict';

// Require Gulp, and Gulp Load Plugins
var gulp = require('gulp');
var path = require('path');
var $ = require('gulp-load-plugins')();

// Require all PostCSS packages
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var cssnano = require('cssnano');

// Store all PostCSS tasks under a processes variable
var processes = [
    cssnext({
        browsers:'safari >= 8, ie >= 11'
    }),
    cssnano(),
    autoprefixer({
        browsers:'safari >= 8, ie >= 11'
    }),
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
            // Provide an array of selectors for uncss to ignore
            ignore: ['.main-navigation.is-open', '.owl-dots', '.owl-dot', /^\.owl-/,],
            html: ['index.html'],
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
