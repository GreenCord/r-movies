const express = require("express");
const bodyParser = require("body-parser");
const favicon = require("express-favicon");
const path = require("path");

const routes = require("./server/routes");

const port = process.env.PORT || 5624;
const app = express();
app.use(favicon(__dirname + "/build/favicon.ico"));

// Serve build / static assets
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

// Body Parser for API
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API Routes
app.use(routes);

// Serve React App Build
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Init server
app.listen(port, (req, res) => {
  console.log(`
  =================================================
  Hello commander, computer reporting. [PORT: ${port}]
  =================================================
  `);
});
