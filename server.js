const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000; // Replit에서 자동으로 포트를 할당합니다.

const server = http.createServer((req, res) => {
  const path = req.url === '/' ? '/index.html' : req.url;
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});