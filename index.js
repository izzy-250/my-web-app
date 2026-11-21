const http = require('http');

const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost:3000');

    if (url.pathname === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('About Page\n');
    } else if (url.pathname === '/login') {
        const username = url.searchParams.get('username');
        const password = url.searchParams.get('password');

        if (username === 'admin' && password === 'password123') {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Login successful. Welcome, admin!');
        } else {
            res.writeHead(401, {'Content-Type': 'text/plain'});
            res.end('Invalid username or password');
        }
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello, this is a basic web app!');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});