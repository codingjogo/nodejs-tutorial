import http from 'http';
import url from 'url';
const PORT = 8000;

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = import.meta.dirname;

const server = http.createServer((req, res) => {
    try {
        if (req.method === 'GET') {
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
        } else {
            res.writeHead(404, {'Content-Type' : 'text/html'});
            res.end('<h1>Invalid HTTP METHOD</h1>');
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type' : 'text/html'});
        res.end('<h1>Not Found</h1>')
    }
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    console.log(__filename);
    console.log(__dirname);
})