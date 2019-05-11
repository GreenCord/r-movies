const express = require("express");
const favicon = require("express-favicon");
const path = require("path");

const port = process.env.PORT || 5624;
const app = express();
app.use(favicon(__dirname + "/build/favicon.ico"));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

// Temporary data return
app.get("/ping", function(req, res) {
  const temp = require("./temporary/temp.json");
  return res.send(temp);
});
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
