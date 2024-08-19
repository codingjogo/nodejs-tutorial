import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';
const PORT = 8000;

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
    try {
        if (req.method === 'GET') {
            let filePath;
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
            } else if (req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html');
            } else {
                throw new Error('Not Found');
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
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