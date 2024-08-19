import http from 'http';
const PORT = 8000;

const server = http.createServer((req, res) => {
    // npm modules: The free npm Registry has become the center of JavaScript code sharing, and with more than two million packages, the largest software registry in the world

    res.writeHead(200, { 'Content-Type' : 'application/json'})
    res.end(JSON.stringify({message: 'Server Status is "OK"'}))
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})