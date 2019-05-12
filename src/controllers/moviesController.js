// Import models, if any

// Import required packages
// const async = require("async");

// CRUDish API

// Create
// N/A - Not used for this application yet.

// Read
// Take posted information to search for movies on themoviedb.org API

// movies_find: Finds one movie.
// Serve temporary JSON until API requests created
exports.movies_find = (req, res) => {
  const temp = require("../../temporary/temp.json");
  return res.send(temp);
};

// movies_top5: Returns top 5 movies for month.
// Serve temporary JSON until API requests created
exports.movies_top5 = (req, res) => {
  const temp = require("../../temporary/temp.json");
  let top5 = [];
  for (i = 0; i < 5; i++) {
    top5.push(temp);
  }
  console.log("Return this top5:", top5);
  return res.send(top5);
};

// Update
// N/A - Not used for this application yet.

// Delete
// N/A - Not used for this application yet.
