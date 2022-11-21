const express = require("express");
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/restaurants", function (req, res) {
  const filePath = path.join(
    __dirname,
    "data",
    "restaurants.json"
  );

  const fileData = fs.readFileSync(filePath);

  const existingRestaurants = JSON.parse(fileData);

  res.render("restaurants", {
    numberOfRestaurants: existingRestaurants.length,
    restaurants: existingRestaurants,
  });
});

app.get("/restaurants/:id", function (req, res) {
  const restaurantId = req.params.id;

  const filePath = path.join(
    __dirname,
    "data",
    "restaurants.json"
  );

  const fileData = fs.readFileSync(filePath);

  const existingRestaurants = JSON.parse(fileData);

  for (const restaurant of existingRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-detail", {
        restaurant: restaurant,
      });
    }
  }
});

app.get("/recommend", function (req, res) {
  res.render("recommend");
});

app.post("/recommend", function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();

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
  res.render("confirm");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000);
