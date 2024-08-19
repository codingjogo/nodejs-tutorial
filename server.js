import http from 'http';
const PORT = 8000;

const server = http.createServer((req, res) => {
    // check URL path from Client
    // then show a response like HTML file 👇

    // You can check this routes through "Thunder Client" Extension in VS Code
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end('<h1>Home Page</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end('<h1>About Page</h1>');
    } else {
        res.writeHead(404, {'Content-Type' : 'text/html'});
        res.end('<h1>Not Found Page</h1>');
    }
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})