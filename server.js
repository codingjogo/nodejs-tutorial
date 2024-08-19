import http from 'http';
const PORT = 8000;

const server = http.createServer((req, res) => {
    // [setHeader-method](https://www.geeksforgeeks.org/node-js-response-setheader-method/)
    // check header in developer tools on Google Chrome under the Network tab -> localhost (under name sidebar) -> click Header tab
    res.setHeader('Content-Type', 'text/plain');
    // Changing status code
    res.statusCode = 404; // Means not found
    res.end('<h1>Hello World</h1>');
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})