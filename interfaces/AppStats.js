var call = require('../src/call');

var url = 'https://api.steampowered.com/ISteamUserStats/GetGlobalStatsForGame/v1/';

module.exports = function(appid, format, statsArr, callback) {
  if (typeof(statsArr) === 'function') {
    callback = statsArr;
    statsArr = format;
    format = 'JSON';
  }

  url += "?appid=" + appid
    + "&format=" + format
    + "&count=" + statsArr.length;

  for (var i = 0; i < statsArr.length; i++) {
    url += "&name[" + i + "]="
      + statsArr[i];
  }

  call(url)

  .then(callback);
}