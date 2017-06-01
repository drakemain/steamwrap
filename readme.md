# Steamwrap
A Steam API wrapper for Node.js.


# Setup
`npm install steamwrap`

```javascript
var Steamwrap = require('steamwrap');
```

Many API calls (but not all) require a Steam API key. Make sure to use the SetKey method once at the start of your application.

`Steamwrap.SetKey(key)`


# Usage

Return data can be accessed by appending `.then()` to method calls and passing in a single parameter function. Errors can be handled using `.catch()`.

```javascript
Steamwrap.GetNewsForApp(220).then(function(data) {console.log(data);}).catch(function(err) {console.error(err);});
```

Note that return data is a string.

[More information](http://bluebirdjs.com/docs/getting-started.html)

# Methods

The format parameter is optional for all methods. If ommited, JSON will be returned. Possible formats include JSON, xml, and VDF (Valve Data Fromat).

## ISteamUserStats

`GetGlobalStatsForGame(appid, statsArray, format)`

```
statsArray is an array containing the names of achievements as defined in Steamworks.
```

`GetGlobalAchievementPercentagesForApp(appid, format)`

`GetPlayerAchievements(steamid, appid, format)`

`GetUserStatsForGame(steamid, appid, format)`

`GetSchemaForGame(appid, format)`

## ISteamNews

`GetNewsForApp(appid, feedParameters)`

```
feedParameters is optional. It can include any of the following:
*count*: the number of news items returned (default: 1)
*maxlength*: how many characters of the body of each news item is returned (default: 300)
*format*: the format of the returned data (default: JSON)
```

## ISteamUser

`GetFriendList(steamid, format)`

`GetPlayerSummaries(steamids, format)`

```
steamids is an array of valid Steam IDs.
```

`GetPlayerBans(steamids)`

```
steamids is an array of valid Steam IDs.
```

`ResolveVanityURL(vanityurl, format)`

```
Note that vanityurl is the customizable name at the end of a steam profile url. For example to get the Steam ID for the profile steamcommunity.com/id/robinwalker, you would pass in robinwalker for the vanityurl and not the url itself, despite the name of the parameter.
```