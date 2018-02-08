var gulp   = require('gulp')
var concat = require('gulp-concat');
var watch  = require('gulp-watch');

gulp.task('scripts', function() {
  return gulp.src([
    './jsbase/windowLoadStart.js',
    './jsbase/main.js',
    './jsbase/runOtherCodeStart.js',

    './src/*.js',

    './jsbase/runOtherCodeEnd.js',
    './jsbase/windowLoadEnd.js',

  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('html', function() {
  return gulp.src([
    './htmlbase/start.html',

    './app1/**/*.html',
    './app2/**/*.html',

    './htmlbase/end.html',
  ])
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
  // Endless stream mode
    gulp.watch(['./app1/*.html', './app2/*.html', './htmlbase/*.html'], ['html', 'scripts']);
    gulp.watch(['./jsbase/main.js','./src/*.js'], ['scripts', 'html']);
});
