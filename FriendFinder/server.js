// Dependencies
var express = require("express");
var path = require("path");

// Create express app instance
var app = express();

// Set port
var PORT = process.env.PORT || 8080;

app.use(express.static("aa/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRroutes.js")(app);

// Start server so that it can begin listening to client requests
app.listen(PORT, function() {
    console.log("Server listening on: http://loclhost:" + PORT);
});
