//create simple http web server
//to handle requests and send responses
//to retrieve comments and add comments
//using a simple in-memory data store

//import http module
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const { parse } = require('querystring');

//create a server object
http.createServer((req, res) => {
    if (req.url === '/comments' && req.method === 'GET') {
        //return all comments
        //read all comments from the file
        fs.readFile('./comments.json', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.end('Comments not found');
            }
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(data);
        });
    } else if (req.url === '/comments' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            //parse the body
            let params = parse(body);

            //read all comments from the file
            fs.readFile('./comments.json', 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(404, {
                        'Content-Type': 'text/plain'
                    });
                    res.end('Comments not found');
                }

                let comments = JSON.parse(data);
                comments.push(params);

                //write comments back to the file
                fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
                    if (err) {
                        res.writeHead(500, {
                            'Content-Type': 'text/plain'
                        });
                        res.end('Internal server error');
                    }
                    res.writeHead(201, {
                        'Content-Type': 'application/json'
                    });
                    res.end(JSON.stringify(params));
                });
            });
        });
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('Not found');
    }
}).listen(3000, () => {
    console.log('Server is listening on port 3000');
});