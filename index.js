const http = require("http");
let cal = require("./calculation");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are " + cal.myDateTime() + "<br>");
    res.write("sub: " + cal.sub(5, 2) + "<br>");
    res.write("sum: " + cal.sum(5, 2) + "<br>");
    res.write("mul: " + cal.mul(5, 2) + "<br>");
    res.write("div: " + cal.div(5, 2) + "<br>");
    res.write("modulo: " + cal.modulo(5, 2) + "<br>");

    res.end("Hello world, this is my server.");
  })
  .listen(8081);

console.log("Server running at http://localhost:8081/");
