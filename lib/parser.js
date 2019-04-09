'use strict'

const babelParser = require('@babel/parser')

module.exports = {
  parse(code) {
    return babelParser.parse(code, {
      sourceType: 'module',
      plugins: [
        'jsx',
        'flow',
        'objectRestSpread',
        'decorators-legacy',
        'classProperties',
        'dynamicImport'
      ]
    })
  }
}
