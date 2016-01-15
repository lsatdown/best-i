'use strict';

// Require Gulp and require-dir for getting the gulp directory.
var gulp = require('gulp');
var requireDir = require('require-dir');

// Require the Gulp directory
requireDir('./gulp', {recurse: true});

// Default Gulp Task
gulp.task('default', ['styles']);
