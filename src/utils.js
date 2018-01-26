const Big = require('big.js')
const StellarSdk = require('stellar-sdk')

module.exports = {

  sleep: (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  },

  log: (msg) => {
    if (process.env.MODE !== 'testing') {
      console.log(msg)
    }
  }
}