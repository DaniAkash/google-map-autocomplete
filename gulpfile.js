var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    gp_sourcemaps = require('gulp-sourcemaps');

gulp.task('js-fef', function(){
  return gulp.src(['bower_components/jquery/dist/jquery.min.js', 'bower_components/google-maps/lib/Google.min.js', 'src/app.js'])
    .pipe(gp_sourcemaps.init())
    .pipe(gp_concat('concat.js'))
    .pipe(gulp.dest('./'))
    .pipe(gp_rename('google-map-autocomplete.js'))
    .pipe(gp_uglify())
    .pipe(gp_sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['js-fef'], function(){});
