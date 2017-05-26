var call = require('../src/call');

var url = "http://api.steampowered.com/ISteamUser/GetFriendList/v0001/";

module.exports = function(steamid, format, callback) {
  if (typeof(format) === 'function') {
    callback = format;
    format = 'JSON';
  }

  url += '?key=' + process.env.STEAM_API_KEY
    + '&format=' + format
    + '&steamid=' + steamid;

  call(url)

  .then(callback);
}