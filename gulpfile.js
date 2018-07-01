var gulp = require('gulp')
var scss = require('gulp-scss')

gulp.task('scss', function() {
  return gulp
    .src('app/scss/**/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('app/css'))
})
