# Steamwrap
A Steam API wrapper for Node.js.


# Setup
`npm install steamwrap`

```javascript
var Steamwrap = require('steamwrap');
```

Many API calls (but not all) require a Steam API key. Make sure to use the SetKey method once at the start of your application.

`Steamwrap.SetKey(key)`


# Methods

The format parameter is optional for all methods. If ommited, JSON will be returned. Possible formats include JSON, xml, and VDF (Valve Data Fromat).

`GetGlobalStatsForGame(appid, statsArray, format, callback)`

`GetGlobalAchievementPercentagesForApp(appid, format, callback)`

`GetPlayerAchievements(steamid, appid, format)`

`GetUserStatsForGame(steamid, appid, format, callback)`

`GetSchemaForGame(appid, format, callback)`

`GetNewsForApp(appid, feedParameters, callback)`

```
feedParameters is optional. It can include any of the following:
*count*: the number of news items returned (default: 1)
*maxlength*: how many characters of the body of each news item is returned (default: 300)
*format*: the format of the returned data (default: JSON)
```

`GetFriendList(steamid, format, callback)`

`GetPlayerSummaries(steamids, format, callback)`

```
steamids is an array of valid Steam IDs.
```

`GetPlayerBans(steamids, callback)`

```
steamids is an array of valid Steam IDs.
```