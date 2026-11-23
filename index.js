const http = require("http");

const PORT = 3000;
const message = "Hello, this is a basic web app!";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(`${message}\n`);
});

server.listen(PORT, () => {
  console.log(message);
  console.log(`Server running at http://localhost:${PORT}`);
});