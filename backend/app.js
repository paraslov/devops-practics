const http = require("http");

const hostname = "0.0.0.0";
const port = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    // endpoint /
    const podIP = process.env.POD_IP;
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Hello, World!\n POD IP: ${podIP}\n`);
  } else if (req.url === "/api/users" && req.method === "GET") {
    // endpoint /api/users
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        users: [
          { id: 1, name: "John Doe" },
          { id: 2, name: "Jane Doe" },
        ],
      })
    );
  } else {
    // если путь не найден — 404
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found\n");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
