// Basic Node application for requesting data from the OMDB website via axios
// Here we incorporate the "axios" npm package
var axios = require("axios");

//Check out the Inquirer tutorial page to figure out how this works.

// We then run the request with axios module on a URL with a JSON
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating
    //console.log(response)
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
);
/* Okay, this is not that different from the ajax call. You call axios and then get 
   (remember GET is a method to retreive data). It is going to take in the url.

   THEN you are going to get a response. It looks like the response contains something called data
   and in that data one layer down is the imdbRating. Want to see it? Console log it.

   */