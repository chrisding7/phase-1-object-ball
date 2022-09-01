function gameObject() {
    const game = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brooke Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,                    
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turqoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,                    
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
            },
        }
    };

    return game;
}

let game = gameObject();

function homeTeamName() {
    return game["home"]["teamName"];
}

function awayTeamName() {
    return game["away"]["teamName"];
}

function homeTeamPlayers() {
    //returns the players object with keys of player names and values of player stats (another object)
    return game["home"]["players"];
}

function awayTeamPlayers() {
    //returns the players object with keys of player names and values of player stats (another object)
    return game["away"]["players"];
}

function getPlayer(name) {
    //par: name is the specified name of a player
    //return: returns the value of an object that contains the stats for the named player (key)
    const homePlayerNames = Object.keys(homeTeamPlayers());
    const awayPlayerNames = Object.keys(awayTeamPlayers());
    for(const playerNameIndex in homePlayerNames) {
        //homeTeamPlayers() returns an object with keys of player names and values of stats
        //Object.keys(homeTeamPlayers()) will return an array of the names of the home players
        //for...in loop will compare each home player name to the name parameter
        console.log(name);
        console.log(homePlayerNames[playerNameIndex]);
        if(playerName === name) {
            console.log(homeTeamPlayers()["playerName"])
            return homeTeamPlayers()["playerName"];
        }
    }
    for(const playerNameIndex in awayPlayerNames) {
        //for...in loop is similar to above loop but for away players
        console.log(name);
        console.log(awayPlayerNames[playerNameIndex]);
        if(playerName === name) {
            console.log(awayTeamPlayers()["playerName"])
            return awayTeamPlayers()["playerName"];
        }
    }
    return "no such player found";
}

function numPointsScored(name) {
    //getPlayer(name) will return an object containing the named player's stats
    return getPlayer(name)["points"];
}

function shoeSize(name) {
    return getPlayer(name)["shoe"];
}

function teamColors(teamName) {
    if(homeTeamName() === teamName) {
        return game["home"]["colors"];
    }
    else if(awayTeamName() === teamName) {
        return game["away"]["colors"];
    }
    else {
        return "no such team;"
    }
}

function teamNames() {
    return [homeTeamName(), awayTeamName()];
}

function playerNumbers(teamName) {

}

console.log(getPlayer("Alan Anderson"));


// console.log("home team name: " + homeTeamName());
// console.log(Object.keys(homeTeamPlayers()));
// console.log(getPlayer("Alan Anderson"));
// console.log("team names: " + teamNames() + " || Expected: [\"Brooklyn Nets\", \"Charlotte Hornets\"]");
// console.log("Team Colors: " + teamColors("Brooklyn Nets") + " || Expected: [\"Black\", \"White\"]");
// console.log("Alan Anderson points: " + numPointsScored("Alan Anderson") + " || Expected: 22");
// console.log("Alan Anderson shoe: " + shoeSize("Alan Anderson") + " || Expected: 16");