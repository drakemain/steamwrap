var ISteamUserStats = require('./interfaces/ISteamUserStats');
var ISteamNews      = require('./interfaces/ISteamNews');
var ISteamUser      = require('./interfaces/ISteamUser');

module.exports.SetKey = require('./src/init');

module.exports.GetGlobalStatsForGame = ISteamUserStats.GetGlobalStatsForGame;
module.exports.GetGlobalAchievementPercentagesForApp = ISteamUserStats.GetGlobalAchievementPercentagesForApp;
module.exports.GetPlayerAchievements = ISteamUserStats.GetPlayerAchievements;
module.exports.GetUserStatsForGame = ISteamUserStats.GetUserStatsForGame;
module.exports.GetSchemaForGame = ISteamUserStats.GetSchemaForGame;

module.exports.GetNewsForApp = ISteamNews.GetNewsForApp;

module.exports.GetFriendList = ISteamUser.GetFriendList;
module.exports.GetPlayerSummaries = ISteamUser.GetPlayerSummaries;
module.exports.GetPlayerBans = ISteamUser.GetPlayerBans;
module.exports.ResolveVanityURL = ISteamUser.ResolveVanityURL;