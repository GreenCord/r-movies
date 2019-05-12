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
//////originalfunction
// async function getPopular(pageNum) {
//   // Build request URL
//   const reqUrl = `${url}/popular?api_key=${apiKey}&language=${language}&page=${pageNum}`;
//   // Axios request
//   return axios.get(reqUrl);
// }
///////////////////////
async function getPopular(pageNum) {
  // Build request URL
  const reqUrl = `${url}/popular?api_key=${apiKey}&language=${language}&page=${pageNum}`;
  const response = await axios.get(reqUrl);
  let movies = response.data.results.slice(0, 5).map(movie => {
    return getDetail(movie.id);
  });
  return Promise.all(movies).then(completed => {
    console.log("getPopular: Promise completed", completed);
    return completed;
  });
}
async function getDetail(id) {
  const reqUrl = `${url}/${id}?api_key=${apiKey}&language=${language}`;
  // Axios request
  let data = await axios.get(reqUrl);
  return data.data;
}
async function getDetails(arrIds) {
  console.log("getDetails: arrIds", arrIds);
  let movies = arrIds.map(async movie => {
    console.log("getDetails arrIds.map movie", movie);
    return getDetail(movie);
  });
  Promise.all(movies).then(completed => {
    console.log("getDetails: Promise.all completed", completed);
    return completed;
  });
}
exports.movies_top5 = async (req, res) => {
  try {
    const responseData = await getPopular(1);
    // const movieData = await getDetails(
    //   responseData.data.results.slice(0, 5).map(x => x.id)
    // );
    // Promise.all(movieData).then(completed => {
    //   console.log("Raw response (movieData)", completed);
    //   res.status(200).send(completed);
    // });
    console.log("movies_top5: responseData", responseData);
    res.status(200).send(responseData);
  } catch (event) {
    console.log("Axios/Error: ", event.stack);
    res.status(500).send({ error: event.message });
  }
};

// Update
// N/A - Not used for this application yet.

// Delete
// N/A - Not used for this application yet.
