'use strict';

// Require Gulp, Path, and Gulp Load Plugins
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('watch', function() {
    gulp.watch(['styles/*.scss', 'styles/**/*.scss'], 'styles');
});
