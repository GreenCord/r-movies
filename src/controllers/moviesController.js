// Import models, if any

// Import required packages
require("dotenv").config();
const axios = require("axios");

// CRUDish API

// Define API parts
const url = "https://api.themoviedb.org/3/movie";
const apiKey = process.env.TMDB_API_KEY;
const language = "en-US";

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
async function getPopular(pageNum) {
  // Build request URL
  const reqUrl = `${url}/popular?api_key=${apiKey}&language=${language}&page=${pageNum}`;
  console.log("reqUrl", reqUrl);
  // Axios request
  return axios.get(reqUrl);
}
exports.movies_top5 = async (req, res) => {
  try {
    const responseData = await getPopular(1);
    console.log("Raw response: ", responseData.data.results.slice(0, 5));
    res.status(200).send(responseData.data.results.slice(0, 5));
  } catch (event) {
    console.log("Axios/Error: ", event.stack);
    res.status(500).send({ error: event.message });
  }
};

// Update
// N/A - Not used for this application yet.

// Delete
// N/A - Not used for this application yet.
