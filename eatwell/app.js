const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

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

app.post("/recommend", function (req, res) {
  const restaurant = req.body;

  const restaurantsFilePath = path.join(
    __dirname,
    "data",
    "restaurants.json"
  );

  const restaurantsData = fs.readFileSync(
    restaurantsFilePath
  );

  const existingRestaurants = JSON.parse(restaurantsData);

  existingRestaurants.push(restaurant);

  fs.writeFileSync(
    restaurantsFilePath,
    JSON.stringify(existingRestaurants)
  );

  res.redirect("/confirm");
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
