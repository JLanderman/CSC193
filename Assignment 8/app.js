//CSC 193 Assignment 8
'use strict';
const express = require('express');
const app = express();


// define all endpoints here

app.get('/hello', function (req, res) {
    res.type('text');
    res.send('Hello World!');
  });
  
  //excercise 1
  app.get('/math/circle/:r', function (req, res) {
    const radius = parseFloat(req.params.r);
    if (isNaN(radius)) {
        res.status(400).json({ error: 'Invalid radius provided' });
        return;
    }

    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;

    res.json({ area, circumference });
});

//exercise 2
app.get('/hello/name', function (req, res) {
    const { first, last } = req.query;

    if (!first && !last) {
        res.status(400).send('Missing Required GET parameters: first, last');
        return;
    } else if (!first) {
        res.status(400).send('Missing Required GET parameter: first');
        return;
    } else if (!last) {
        res.status(400).send('Missing Required GET parameter: last');
        return;
    }

    const message = `Hello ${first} ${last}`;
    res.type('text').send(message);
    //Structure website address like this for the query: 
    //http://localhost:8000/hello/name?first=John&last=Doe
});

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);