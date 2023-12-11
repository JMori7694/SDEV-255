var http = require("http");
var server = http.createServer(function(req, res) {
    console.log("Request received:", req.url);
    res.setHeader("Content-type", "text/html; charset=utf-8");
    res.write("<h1>");
    res.write("Good Morning all");
    res.write("</h1>");
    res.end();
});
server.listen(3000);
console.log("\nThe server was started on port 3000\n");
console.log("You can make a request on:");
console.log("http://localhost:3000");