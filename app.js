const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>App Demo</h1>');
  res.write('<h1>User: ' + (process.env.USER || 'Not Set') + '</h1>');
  res.write('<h1>Password: ' + (process.env.PASSWORD || 'Not Set') + '</h1>');
  res.end('<h1>Version: v1</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
