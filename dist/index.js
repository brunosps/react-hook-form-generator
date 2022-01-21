
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-hook-form-generator.cjs.production.min.js')
} else {
  module.exports = require('./react-hook-form-generator.cjs.development.js')
}
