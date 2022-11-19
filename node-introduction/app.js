const express = require("express")

const app = express()

app.get("/", function(req, res) {
  res.end("<h1>Hello World</h1>")
})

app.get("/currenttime", function(req, res) {
  res.end("<h1>" + new Date().toISOString() + "</h1>")
})

app.listen(3000);
