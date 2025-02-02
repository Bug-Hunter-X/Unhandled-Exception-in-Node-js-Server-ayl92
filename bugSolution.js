const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Simulate an error
    throw new Error('Something went wrong!');
  } catch (error) {
    console.error('An error occurred:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
    return; // Important: stop further execution
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});