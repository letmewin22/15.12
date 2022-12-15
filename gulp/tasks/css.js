const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function css(bs) {
  return gulp
    .src('./src/scss/app.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
    .pipe(bs.stream())
}

module.exports = css
