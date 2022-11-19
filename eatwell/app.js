const express = require("express");
const path = require("path");

const app = express();

app.get("/", function (req, res) {
  const indexPath = path.join(
    __dirname,
    "views",
    "index.html"
  );

  res.sendFile(indexPath);
});

app.get("/restaurants", function (req, res) {
  const restaurantsPath = path.join(
    __dirname,
    "views",
    "restaurants.html"
  );

  res.sendFile(restaurantsPath);
});

app.get("/recommend", function (req, res) {
  const recommendPath = path.join(
    __dirname,
    "views",
    "recommend.html"
  );

  res.sendFile(recommendPath);
});

app.get("/confirm", function (req, res) {
  const confirmPath = path.join(
    __dirname,
    "views",
    "confirm.html"
  );

  res.sendFile(confirmPath);
});

app.get("/about", function (req, res) {
  const aboutPath = path.join(
    __dirname,
    "views",
    "about.html"
  );

  res.sendFile(aboutPath);
});

app.listen(3000);
