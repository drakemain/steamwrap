var call = require('../src/call');

var url = "http://api.steampowered.com/ISteamNews/";

module.exports.GetNewsForApp = function(appid, feedRequestParams) {
  if (!feedRequestParams) {
    feedRequestParams = {};
  }

  if (!feedRequestParams.count) {
    feedRequestParams.count = 1;
  }

  if (!feedRequestParams.maxlength) {
    feedRequestParams.maxlength = 300;
  }

  if (!feedRequestParams.format) {
    feedRequestParams.format = 'JSON';
  }

  url += "GetNewsForApp/v0002/"
    + "?appid=" + appid
    + "&count=" + feedRequestParams.count
    + "&maxlength=" + feedRequestParams.maxlength
    + "&format=" + feedRequestParams.format;

  return call(url);
}