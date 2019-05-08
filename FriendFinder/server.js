// Dependencies
const express = require("express");
const path = require("path");

// Create express app instance
const app = express();

// Set port
const PORT = process.env.PORT || 8080;

// create generic function to handle request and responses
app.get("*", function(req, res) {
    res.send("Working " + req.url);
});

// Start server so that it can begin listening to client requests
app.listen(PORT, function() {
    console.log("Server listening on: http://loclhost:" + PORT);
});
