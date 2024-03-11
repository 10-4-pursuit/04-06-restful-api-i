const express = require("express");
const app = express();
app.use(express.json());

let books = [];

app.get('/books', (req, res) => {
    res.json(books);
});

app.post('/books', (req, res) => {
    const newBook = { 
        id: books.length + 1, 
        title: req.body.title, 
        author: req.body.author, 
        year: req.body.year
    }

    books.push(newBook);
    res.status(201).send(newBook);
});

app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
    if (book) {
        res.status(200).send(book);
    } else {
        res.status(404).send('Book not found!');
    }
});

app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books[index] = { ...books[index], ...req.body};
        res.status(200).send(books[index]);
    } else {
        res.status(404).send('Book not found!');
    }
});

app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books.splice(index, 1);
        res.status(200).send(`Book successfully deleted`);
    } else {
        res.status(404).send('Book not found!');
    }
});

module.exports = app;






