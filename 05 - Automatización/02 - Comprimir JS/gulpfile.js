var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');


  gulp.task('comprimirCss', function() {
      return gulp.src('./main.css')
          .pipe(csso())
          .pipe(gulp.dest('./out'));
  });

  var uglify = require('gulp-uglify');

  gulp.task('compress', function() {
    return gulp.src('lib/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist'));
  });
