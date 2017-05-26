var request = require('request-promise');

module.exports = function(requestURI, steamKey, callback) {
  return request({uri:requestURI, timeout:6000})

  .catch(function(err) {
    console.log('An error occured while contacting Steam.');
    console.error(err);
  });
}