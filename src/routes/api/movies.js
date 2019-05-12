const router = require("express").Router();
const moviesController = require("../../controllers/moviesController");

// movies_create
// N/A - Not used yet in this app.

// movies_find
router.get("/search", moviesController.movies_find);

// movies_update
// N/A - Not used yet in this app.

// movies_delete
// N/A - Not used yet in this app.

module.exports = router;
