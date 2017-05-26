var call = require('../src/call');

var url = 'http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/';

module.exports = function(appid, format, callback) {
  if(typeof(format) === 'function') {
    callback = format;
    format = 'JSON';
  }

  url += "?appid=" + appid
    + "&format=" + format;

  call(url)

  .then(callback);
}