const prettify = require('gulp-prettify')
const {src, dest} = require('gulp')
const gulpif = require('gulp-if')
const inject = require('gulp-inject-string')
const webphtml = require('gulp-webp-html-nosvg')

function html(bs) {
  const replaceCss = 'app.' + 'e' + Date.now() + '.css'

  return src(['./src/**/[^_]*.html'])
    .pipe(
      prettify({
        indentSize: 2,
        wrapAttributes: 'auto', // 'force'
        preserveNewlines: false,
        // unformatted: [],
        endWithNewline: true,
      })
    )
    .pipe(webphtml())
    .pipe(dest('./build/'))
    .pipe(bs.stream())
}

module.exports = html
