// Pull in friends data
var friendData = require("../data/friends.js");

// Export routes
module.exports = function(app) {

    // List of friends
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    // Add new friend
    app.post("/api/friends", function(req, res) {
        
        // Save user input from survey
        var userData = req.body;

        // Find best match
        var bestMatch = {};

        // Loop through friend data
        for (var i = 0; i < friendData.length; i++) {

            // Find values from survey
            userData.scores[i] = parseInt(userData.scores[i]);

             // Compare scores
            var matchIndex = 0;
            var matchDiff = 40;
            var scoreDiff = 0;

            for (var j = 0; j < friendData[i].scores.length; j++) {
                scoreDiff += Math.abs(friendData[i].scores[j] - userData.scores[j]);
            }

            // if score difference is less than current best match, save as new best match
            if (scoreDiff < matchDiff) {
                matchIndex = i;
                matchDiff = scoreDiff;
            }
        }

        // Set new best match
        bestMatch = friendData[matchIndex];

        // Add new freind to array
        friendData.push(userData);

        // return best match
        res.json(bestMatch);
    });
};