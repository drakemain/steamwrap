var call = require('../src/call');

var url = "http://api.steampowered.com/ISteamNews/";

module.exports.GetNewsForApp = function(appid, feedRequestParams, callback) {
  if (typeof(feedRequestParams) == 'function') {
    callback = feedRequestParams;

    feedRequestParams = {};
  }

  newsParamCheck(feedRequestParams);

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

function newsParamCheck(params) {
  if (!params.count) {
    params.count = 1;
  }

  if (!params.maxlength) {
    params.maxlength = 300;
  }

  if (!params.format) {
    format = 'JSON';
  }
} 