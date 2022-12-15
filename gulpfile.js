const gulp = require('gulp')
const del = require('del')
const browsersync = require('browser-sync').create()

const css = require('./gulp/tasks/css.js').bind(null, browsersync)
const html = require('./gulp/tasks/html.js').bind(null, browsersync)
const images = require('./gulp/tasks/images.js').bind(null, browsersync)
const fonts = require('./gulp/tasks/fonts.js')
const server = require('./gulp/tasks/server').bind(null, browsersync)

const fontsInclude = require('./gulp/tasks/fontsInclude')

function watchFiles() {
  gulp.watch(['./src/scss/**/*.scss'], css)
  gulp.watch(['./src/images/**/*.{jpg,png,svg,gif,ico,webp}'], images)
  // gulp.watch(['./src/js/**/*.js'], js)
  gulp.watch(['./src/**/*.html'], html)
}

function clean() {
  return del('./build/')
}

const dev = gulp.series(clean, gulp.parallel(html, css, images))

const watch = gulp.parallel(dev, watchFiles, server)

exports.css = css
exports.html = html
exports.fonts = fonts
exports.images = images
exports.fi = fontsInclude
exports.watch = watch
exports.clean = clean
