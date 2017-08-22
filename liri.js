// Grab all of the command line arguments from Node.
var nodeArg = process.argv;
var task = [];
var keys = require("./keys.js");

// starts with **2** so we skip the path and node command from the command line
 for (var i = 2; i < nodeArg.length; i++) {

       task.push(nodeArg[i]);

 }


if (task[0]==="my-tweets"){

  var Twitter = require('twitter');

  var client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret
  });

  var params = {screen_name: 'nodejs'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
      console.log("he man");
    }
  });


} else if (task[0]==="spotify-this-song") {

} else if (task[0]==="movie-this") {

} else if (task[0]==="do-what-it-says") {

}





// Basic Node application for requesting data from the OMDB website
 var request = require("request");
//
// // We then run the request module on a URL with a JSON
request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=40e9cece", function(error, response, body) {
//
// If there were no errors and the response code was 200 (i.e. the request was successful)...
     if (!error && response.statusCode === 200) {

         // Then we print out the imdbRating
             console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
               }
    });
