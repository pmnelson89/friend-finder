// Pull in friends data
const friendData = require("../data/friends");

// Export routes
module.exports = function(app) {

    // List of friends
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    // Add new friend
    app.post("/api/friends", function(req, res) {

        // Set user input variables
        var userInput = req.body;
        var userScores = userInput.scores;
        
        // Create best match object
        var bestMatch = {
            name: "",
            photo: "",
            matchDiff: 1000
        };

        // Loop through friend data
        for (var i = 0; i < friendData.length; i++) {

            var currentMatch = friendData[i];
            var totalDiff = 0;

            console.log("current match: " + currentMatch.name);
            console.log("bestMatch: " + bestMatch.name);
            
            // Loop through score array in the match to find the score differences
            for (var j = 0; j < currentMatch.scores.length; j++) {

                // Find the difference between the question scores and add them to the total difference
                totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(currentMatch.scores[j]));
            }

            // Compare the current match to the existing best match and replace if better
            if (totalDiff <= bestMatch.matchDiff) {

                bestMatch.name = currentMatch.name;
                bestMatch.photo = currentMatch.photo;
                bestMatch.matchDiff = totalDiff;

                console.log("best match: " + bestMatch.name);
                console.log("current match: " + currentMatch.name);
            }
        }

        // Add new data to the friendData array and return the best match
        friendData.push(userInput);
        res.json(bestMatch);

    }); 
};