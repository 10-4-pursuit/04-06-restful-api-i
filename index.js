const express = require('express');
const app = express();

app.get('/books', ( req, res ) => {
    const books = [ 
        { 
            id: 1, 
            title: 'Book 1', 
            author: 'John Doe', 
            year: 2021 
        }, 

        { 
            id: 2, 
            title: 'Book 2', 
            author: 'Jane Doe', 
            year: 2022 
        } 
    ];

    res.json(books);
});

app.get('/books/:id', ( req, res ) => {
    const book = { 
        id: parseInt(req.params.id), 
        title: 'Book 1', 
        author: 'John Doe', 
        year: 2021
    };

    res.json(book);
});

app.put('/books/:id', ( req, res ) => {
    const book = { 
        id: req.params.id, 
        title: 'Book 1', 
        author: 'Jane Doe', 
        year: 2021 
    };

    res.json(book);
});

app.post('/books', ( req, res ) => {
    const book = { 
        id: 1, 
        title: 'Book 1', 
        author: 'John Doe', 
        year: 2021 
    };

    res.status(201).json(book);
});

app.delete('/books/:id', ( req, res ) => {
    res.status(200).send("Book successfully deleted");
});

module.exports = app