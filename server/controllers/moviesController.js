// Import models, if any

// Import required packages
require("dotenv").config();
const axios = require("axios");

// CRUDish API

// Define API parts
const url = "https://api.themoviedb.org/3/movie";
const apiKey = process.env.TMDB_API_KEY;
const language = "en-US";
const region = "US";

// Create
// N/A - Not used for this application yet.

// Read
// Take posted information to search for movies on themoviedb.org API

// movies_find: Finds one movie.
// Serve temporary JSON until API requests created
exports.movies_find = async (req, res) => {
  // const temp = require("../../temporary/temp.json");
  // return res.send(temp);
  try {
    const responseData = await getDetail(req.params.id);
    res.status(200).send(responseData);
  } catch (event) {
    console.error("Axios/Error: ", event.stack);
    switch (event.response.status) {
      case 404:
        res.status(404).send({ error: event.message });
        break;
      default:
        res.status(500).send({ error: event.message });
    }
  }
};

// movies_top5: Returns datils for the top 5 movies.

// getPopular retrieves the first page of the most popular movies from TMDB.
async function getPopular(pageNum) {
  // Build request URL for (pageNum)th page of most popular movies.
  const reqUrl = `${url}/popular?api_key=${apiKey}&language=${language}&region=${region}&page=${pageNum}`;

  // Request response from axios to get the page of popular movies.
  const response = await axios.get(reqUrl);

  // Slice the top 5 movies and map the id to the getDetail request.
  // Get top 5 movies originally released in USA
  // Map responses into movies array.
  let movies = response.data.results.slice(0, 10).map(movie => {
    if (movie.original_language === "en") {
      return getDetail(movie.id);
    }
  });
  // Filter null values and returns the movies array with details after all items mapped.
  return Promise.all(movies).then(completed => {
    return completed
      .filter(x => {
        return x;
      })
      .slice(0, 5);
  });
}
// getDetail retrieves the details for the specific movie ID
async function getDetail(id) {
  const reqUrl = `${url}/${id}?api_key=${apiKey}&language=${language}&append_to_response=videos,reviews,recommendations`;
  // Axios request
  let data = await axios.get(reqUrl);
  return data.data;
}

exports.movies_top5 = async (req, res) => {
  try {
    const responseData = await getPopular(1);
    res.status(200).send(responseData);
  } catch (event) {
    console.error("Axios/Error: ", event.stack);
    res.status(500).send({ error: event.message });
  }
};

// Update
// N/A - Not used for this application yet.

// Delete
// N/A - Not used for this application yet.
