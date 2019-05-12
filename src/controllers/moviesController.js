// Import models, if any

// Import required packages
// const async = require("async");

// CRUDish API

// Create
// N/A - Not used for this application yet.

// Read
// Take posted information to search for movies on themoviedb.org API
// Serve temporary JSON until API requests created
exports.movies_find = (req, res) => {
  const temp = require("../../temporary/temp.json");
  return res.send(temp);
};

// Update
// N/A - Not used for this application yet.

// Delete
// N/A - Not used for this application yet.
