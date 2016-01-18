'use strict';

// Require Gulp, and Gulp Load Plugins
var gulp = require('gulp');
var path = require('path');
var $ = require('gulp-load-plugins')();

gulp.task('images', function() {
    gulp.src('images/*')
        .pipe($.imagemin({
            progressive: true,
        }))
        .pipe(gulp.dest('build/images'))
        .pipe($.notify({
            message: 'Images Optimised!',
            onLast: true,
        }))
});
