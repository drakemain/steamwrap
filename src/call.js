var request = require('request-promise');

module.exports = function(requestURI, steamKey, callback) {
  return request({uri:requestURI, timeout:6000})
}