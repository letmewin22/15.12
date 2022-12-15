/*eslint-disable*/
const fs = require('fs')

function fontsStyle(cb) {
  const path = './src/scss/helpers/fonts-include.scss'

  fs.writeFile(path, '', cb)
  return fs.readdir('./build/fonts/', function (err, items) {
    if (items) {
      let cFontname
      for (let i = 0; i < items.length; i++) {
        let fontname = items[i].split('.')[0]
        // fontname = fontname[0]
        if (cFontname !== fontname) {
          fs.appendFile(
            path,
            '@include font("' +
              fontname +
              '", "' +
              fontname +
              '", "400", "normal");\r\n',
            cb
          )
        }
        cFontname = fontname
      }
    }
  })
  cb()
}

module.exports = fontsStyle
