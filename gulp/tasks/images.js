const {src, dest} = require('gulp')
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')
const gulpif = require('gulp-if')

function images(bs) {
  return src('./src/images/**/*.{jpg,png,svg,gif,ico,webp}')
    .pipe(
      webp({
        quality: 92,
      })
    )
    .pipe(dest('./build/images'))
    .pipe(src('./src/images/**/*.{jpg,png,svg,gif,ico,webp}'))
    .pipe(
      imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 92, progressive: true}),
        imagemin.optipng({optimizationLevel: 3}),
        imagemin.svgo({
          plugins: [{removeViewBox: false}, {cleanupIDs: false}],
        }),
      ])
    )
    .pipe(dest('./build/images'))
    .pipe(bs.stream())
}

module.exports = images
