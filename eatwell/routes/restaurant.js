const express = require("express");
const uuid = require("uuid");

const restaurantData = require("../utils/restaurant-data");

const router = express.Router();

router.get("/restaurants", function (_req, res) {
  const restaurants = restaurantData.getStoredRestaurants();

  res.render("restaurants", {
    numberOfRestaurants: restaurants.length,
    restaurants: restaurants,
  });
});

router.get("/restaurants/:id", function (req, res) {
  const restaurantId = req.params.id;

  const restaurants = restaurantData.getStoredRestaurants();

  for (const restaurant of restaurants) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-detail", {
        restaurant: restaurant,
      });
    }
  }

  res.status(404).render("404");
});

router.get("/recommend", function (_req, res) {
  res.render("recommend");
});

router.post("/recommend", function (req, res) {
  const restaurant = req.body;

  restaurant.id = uuid.v4();

  const restaurants = restaurantData.getStoredRestaurants();

  restaurants.push(restaurant);

  restaurantData.storeRestaurants(restaurants);

  res.redirect("/confirm");
});

router.get("/confirm", function (_req, res) {
  res.render("confirm");
});

module.exports = router;
