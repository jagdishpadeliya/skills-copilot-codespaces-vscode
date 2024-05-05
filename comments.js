//create a simple web server which is running on port 3000
//this server will have a single endpoint /comments
//this endpoint will be a POST endpoint which will accept JSON
//the JSON will have a single key "comment" which will be a string
//the server will store all the comments in memory
//the server will have a GET endpoint for /comments which will return all the comments in JSON format

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

let comments = [];

app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    comments.push(comment);
    res.send('Comment added');
});

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});