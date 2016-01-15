'use strict';

// Require Gulp, and Gulp Load Plugins
var gulp = require('gulp');
var path = require('path');
var $ = require('gulp-load-plugins')();

gulp.task('copysvg', function() {
    gulp.src(['svg/*.svg'])
        .pipe($.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
        }))
        .pipe(gulp.dest('build/svg'))
        .pipe($.notify({
            message: 'SVGs copied!',
            onLast: true
        }))
});
