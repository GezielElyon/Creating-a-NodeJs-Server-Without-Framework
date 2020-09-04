const http = require('http');

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Your server http is runnig!');
})

server.listen(port, hostName, () => {
    console.log('Server started on port 3000!'); 
})