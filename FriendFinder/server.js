// Dependencies
const express = require("express");
const path = require("path");

// Create express app instance
const app = express();

// Set port
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.static(path.join(__dirname, "app/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Start server so that it can begin listening to client requests
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
