var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');


  gulp.task('comprimir csso', function() {
      return gulp.src('./main.css')
          .pipe(csso())
          .pipe(gulp.dest('./out'));
  });
