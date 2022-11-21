const path = require("path");
const fs = require("fs");

const filePath = path.join(
  __dirname,
  "..",
  "data",
  "restaurants.json"
);

function getStoredRestaurants() {
  const fileData = fs.readFileSync(filePath);

  const existingRestaurants = JSON.parse(fileData);

  return existingRestaurants;
}

function storeRestaurants(restaurants) {
  fs.writeFileSync(filePath, JSON.stringify(restaurants));
}

module.exports = { getStoredRestaurants, storeRestaurants };
