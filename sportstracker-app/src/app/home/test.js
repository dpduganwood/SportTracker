// var unirest = require("unirest");

// exports.getData = function() {
//     console.log("got to function")
//     var req = unirest("GET", "https://api-nba-v1.p.rapidapi.com/seasons/");

//     req.headers({
//         "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
//         "x-rapidapi-key": "0f80d42940msh7e702f1daf041e7p185178jsn1c3c50fd85f3"
//     });
    
    
//     req.end(function (res) {
//         console.log("got here!")
//         if (res.error) throw new Error(res.error);
//         console.log(res.body);
//     });
    
// }

var MySportsFeeds = require("mysportsfeeds-node");

exports.getData = function() {
    var msf = new MySportsFeeds("1.2", true);
    msf.authenticate("178e0cc9-e553-4c80-818f-a570d8", "MYSPORTSFEEDS")
     
    var today = new Date();
     
    var data = msf.getData('nhl', '2017-2018-regular', 'scoreboard', 'json', { 
        fordate: today.getFullYear() + 
            ('0' + parseInt(today.getMonth() + 1)).slice(-2) + 
            ('0' + today.getDate()).slice(-2),
        force: true
    });
    console.log(data)
}

