var call = require('../src/call');

var url = 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/';

module.exports = function(steamidArray, format, callback) {
  if (typeof(format) === 'function') {
    callback = format;
    format = 'JSON';
  }

  url += '?key=' + process.env.STEAM_API_KEY
    + '&format=' + format + '&steamids=';

  for (var i = 0; i < steamidArray.length; i++) {
    url += steamidArray[i];

    if (i < steamidArray.length - 1) {
      url += ',';
    }
  }

  call(url)

  .then(callback);
}