// Create web server
const express = require('express');
const app = express();

// Parse JSON data
app.use(express.json());

// Store comments
const comments = {};

// Handle GET request
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Handle POST request
app.post('/comments', (req, res) => {
    const { comment } = req.body;
    const id = Math.floor(Math.random() * 100);
    comments[id] = comment;
    res.send(comments);
});

// Listen to port 4001
app.listen(4001, () => {
    console.log('Comments service is listening on port 4001');
});