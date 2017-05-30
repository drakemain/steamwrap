var call = require('../src/call');

var url = "http://api.steampowered.com/ISteamUser/";

module.exports.GetFriendList = function(steamid, format, callback) {
  if (typeof(format) === 'function') {
    callback = format;
    format = 'JSON';
  }

  url += 'GetFriendList/v0001/'
    + '?key=' + process.env.STEAM_API_KEY
    + '&format=' + format
    + '&steamid=' + steamid;

  call(url)

  .then(callback);
}

module.exports.GetPlayerSummaries = function(steamidArray, format, callback) {
  if (typeof(format) === 'function') {
    callback = format;
    format = 'JSON';
  }

  url += 'GetPlayerSummaries/v0002/'
    + '?key=' + process.env.STEAM_API_KEY
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

module.exports.GetPlayerBans = function(steamidArray, callback) {
  url += 'GetPlayerBans/v1/'
    + '?key=' + process.env.STEAM_API_KEY
    + '&steamids=';

  for (var i = 0; i < steamidArray.length; i++) {
    url += steamidArray[i];

    if (i < steamidArray.length - 1) {
      url += ',';
    }
  }

  call(url)

  .then(callback);
}

module.exports.ResolveVanityURL = function(vanityurl, format, callback) {
  if (typeof(format) === 'function') {
    callback = format;
    format = 'JSON';
  }

  url += 'ResolveVanityURL/v0001'
    + '?key=' + process.env.STEAM_API_KEY
    + '&vanityurl=' + vanityurl
    + '&format=' + format;

  call(url)

  .then(callback);
}