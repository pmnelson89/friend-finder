// Dependencies
const express = require("express");

// Create express app instance
const app = express();

// Set port
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Start server so that it can begin listening to client requests
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
