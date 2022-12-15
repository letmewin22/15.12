const {src, dest} = require('gulp')
const ttf2woff = require('gulp-ttf2woff')
const ttf2woff2 = require('gulp-ttf2woff2')

function fonts() {
  src('./src/fonts/**/*.ttf').pipe(ttf2woff()).pipe(dest('./build/fonts/'))
  return src('./src/fonts/**/*.ttf')
    .pipe(ttf2woff2())
    .pipe(dest('./build/fonts/'))
}

module.exports = fonts
