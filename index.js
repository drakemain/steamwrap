var ISteamUserStats = require('./interfaces/ISteamUserStats');
var ISteamNews      = require('./interfaces/ISteamNews');
var ISteamUser      = require('./interfaces/ISteamUser');

module.exports.SetKey = require('./src/init');

module.exports.GetGlobalStatsForGame = ISteamUserStats.GetGlobalStatsForGame;
module.exports.GetGlobalAchievementPercentagesForApp = ISteamUserStats.GetGlobalAchievementPercentagesForApp;

module.exports.GetNewsForApp = ISteamNews.GetNewsForApp;

module.exports.GetFriendList = ISteamUser.GetFriendList;
module.exports.GetPlayerSummaries = ISteamUser.GetPlayerSummaries;
module.exports.GetPlayerBans = ISteamUser.GetPlayerBans;