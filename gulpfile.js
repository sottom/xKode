var gulp   = require('gulp')
var concat = require('gulp-concat');
var watch  = require('gulp-watch');

gulp.task('scripts', function() {
  return gulp.src([
    './jsbase/windowLoadStart.js',
    './jsbase/main.js',
    './jsbase/runOtherCodeStart.js',

    ///////////// your code //////////////
    './js/*.js',
    ///////////// your code //////////////

    './jsbase/runOtherCodeEnd.js',
    './jsbase/windowLoadEnd.js',
  ])
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('html', function() {
  return gulp.src([
    './htmlbase/start.html',
    './htmlbase/app.html',

    ///////////// your code //////////////
    './html/**/*.html',
    ///////////// your code //////////////

    './htmlbase/end.html',
  ])
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
  // Endless stream mode
    gulp.watch(['./html/*', './htmlbase/*', './js/*', './jsbase/*'], ['html', 'scripts']);
});
