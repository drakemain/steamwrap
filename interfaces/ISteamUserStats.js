var call = require('../src/call');

var url = 'https://api.steampowered.com/ISteamUserStats/';

module.exports.GetGlobalStatsForGame = function(appid, statsArr, format, callback) {
  if (typeof(format) === 'function') {
    callback = format;
    format = 'JSON';
  }

  url += "GetGlobalStatsForGame/v1/"
    + "?appid=" + appid
    + "&format=" + format
    + "&count=" + statsArr.length;

  for (var i = 0; i < statsArr.length; i++) {
    url += "&name[" + i + "]="
      + statsArr[i];
  }

  return call(url);
}

module.exports.GetGlobalAchievementPercentagesForApp = function(appid, format, callback) {
  if (typeof(format) === 'function') {
    callback = format;
    format = 'JSON';
  }

  url += 'GetGlobalAchievementPercentagesForApp/v0002/'
    + "?gameid=" + appid
    + "&format=" + format;

  return call(url);
}

module.exports.GetPlayerAchievements = function(steamid, appid, format, callback) {
  if (typeof(format) === 'function') {
    callback = format;
    format = 'JSON';
  }

  url += 'GetPlayerAchievements/v0001'
    + '?steamid=' + steamid
    + '&appid=' + appid
    + '&format=' + format
    + '&key=' + process.env.STEAM_API_KEY;

  return call(url);
}

module.exports.GetUserStatsForGame = function(steamid, appid, format, callback) {
  if (typeof(format) === 'function') {
    callback = format;
    format = 'JSON';
  }

  url += 'GetUserStatsForGame/v0002/'
    + '?steamid=' + steamid
    + '&appid=' + appid
    + '&format=' + format
    + '&key=' + process.env.STEAM_API_KEY;

  return call(url);
}

module.exports.GetSchemaForGame = function(appid, format, callback) {
    if (typeof(format) === 'function') {
    callback = format;
    format = 'JSON';
  }

  url += 'GetSchemaForGame/v2/'
    + '?appid=' + appid
    + '&format=' + format
    + '&key=' + process.env.STEAM_API_KEY;

  return call(url);
}