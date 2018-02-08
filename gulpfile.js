var gulp   = require('gulp')
var concat = require('gulp-concat');
var watch  = require('gulp-watch');

gulp.task('scripts', function() {
  return gulp.src('./src/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('html', function() {
  return gulp.src([
    './htmlbase/start.html',
    './html/*.html',
    './htmlbase/end.html',
  ])
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
  // Endless stream mode
    gulp.watch('./src/*.js', ['scripts', 'html']);
    gulp.watch('./html/*.html', ['html', 'scripts']);
});
