// using http modules we can abel to build servers
// http modules have many methods
// createServer method has two parameter: req(request which is come from the client, and tries to reach an ENDPOINT), res(response which is an answer of the client request). both parameter is a huge object with many useful methods

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");

    // if we not use a return is this structure the JS automatically read the code and gets an error
    // other solution is else if, else
    return;
  }
  if (req.url === "/about") {
    res.end("here is our short history");
    return;
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>
  `);
});

server.listen(5000);
