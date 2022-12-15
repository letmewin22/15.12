// const browsersync = require('browser-sync').create()

function browserSync(bs) {
  bs.init({
    server: {
      baseDir: './build/',
    },
    port: 8080,
    notify: false,
  })
}

module.exports = browserSync
