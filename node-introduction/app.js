const http = require("http");

function handleRequest(req, res) {
  if (req.url === '/currenttime') {
    res.statusCode = 200;
    res.end("<h1>" + new Date().toISOString() +"</h1>")
  }

  if (req.url === '/') {
    res.statusCode = 200;
    res.end("<h1>Hello World</h1>");
  }
}

const server = http.createServer(handleRequest);

server.listen(3000);
