var call = require('../src/call');

var url = "http://api.steampowered.com/ISteamNews/";

module.exports.GetNewsForApp = function(appid, feedRequestParams, callback) {
  if (typeof(feedRequestParams) == 'function') {
    callback = feedRequestParams;

    feedRequestParams = {count:3, maxlength:300, format:'JSON'}
  }

  url += "GetNewsForApp/v0002/"
    + "?appid=" + appid
    + "&count=" + feedRequestParams.count
    + "&maxlength=" + feedRequestParams.maxlength
    + "&format=" + feedRequestParams.format;

    return call(url)

    .then(callback)

    .catch(function(err) {
      console.log(err);
    });
}