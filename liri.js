// Grab all of the command line arguments from Node.
var nodeArg = process.argv;
var task = [];
var keys = require("./keys.js");

// starts with **2** so we skip the path and node command from the command line
 for (var i = 2; i < nodeArg.length; i++) {

       task.push(nodeArg[i]);

 }


if (task[0]==="my-tweets"){
  task.splice(0,1);
  var argument = task.join(" ");
  var Twitter = require('twitter');

  var client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret
  });

  var params = {screen_name: 'realDonaldTrump'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log("Tweet #" +(i+1)+ " "+tweets[i].text);
      }
    }
  });


} else if (task[0]==="spotify-this-song") {

  task.splice(0,1);
  var argument = task.join(" ");
  //if valid input: search, else search "the sign"
  if(!argument){
    argument = "The Sign";
  }


  var Spotify = require('node-spotify-api');

  var spotify = new Spotify({
  id: "a691b8de89674f1fb619553a8d32ad2f",
  secret: "a8c169ac2d3b4f7392983159bc7f3b60"
  });

spotify.search({ type: 'track', query: argument }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

console.log("Artist name: "+data.tracks.items[0].artists[0].name);
console.log("Track name: "+data.tracks.items[0].name);
console.log("Preview URL: "+data.tracks.items[0].preview_url);

console.log("Album name: "+data.tracks.items[0].album.name);

});

} else if (task[0]==="movie-this") {

  //if valid input: search, else search "the sign"
  if(task[1]){
    var argument = task[1];
  } else {
    var argument = "The sign";
  }

  // requesting data from the OMDB website
  var request = require("request");
  request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=40e9cece", function(error, response, body) {

  // If there were no errors and the response code was 200 (i.e. the request was successful)
       if (!error && response.statusCode === 200) {

           // Then we print out the imdbRating
           console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
        }
  });


} else if (task[0]==="do-what-it-says") {

}
