'use strict';

// Require Gulp, and Gulp Load Plugins
var gulp = require('gulp');
var path = require('path');
var $ = require('gulp-load-plugins')();

// Build task to generate all assets into the build directory.
gulp.task('build', ['styles', 'scripts', 'images']);
