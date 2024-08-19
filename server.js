import http from 'http';
const PORT = 8000;

const server = http.createServer((req, res) => {
    // npm modules: The free npm Registry has become the center of JavaScript code sharing, and with more than two million packages, the largest software registry in the world

    // This is how you secure API keys
    console.log('API KEY: ' + process.env.PRIVATE_KEY);

    // To run code above 👆 you should add this command "--env-file=.env" to your script in package.json

    res.writeHead(200, { 'Content-Type' : 'application/json'})
    res.end(JSON.stringify({message: 'Server Status is "OK"'}))
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})