const express = require('express');

const app = express();

const books = [];

app.use(express.json());

app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (book) {
        res.status(200).json(book)
    } else {
        res.status(404).send('Book not found')
    }
})

app.get('/books', (req, res) => {
    res.json(books)
});

app.post('/books', (req, res) => {
    const { title, author, year } = req.body
    const newBook = { 
        id: books.length + 1, 
        title, 
        author,
        year
    };
    books.push(newBook);
    res.status(201).send(newBook);
});

app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const index = books.findIndex(book => book.id == id);
    if (index !== -1) {
        const updatedBook = { ...books[index], ...req.body };
        books[index] = updatedBook;
        res.json(updatedBook);
    } else {
        res.status(404).send({ error: 'Book not found' });
    }
});

app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    const index = books.findIndex(book => book.id == id);
    if (index !== -1) {
        books.splice(index, 1);
        res.status(200).send({ message: 'Book successfully deleted' });
    } else {
        res.status(404).send({ error: 'Book not found' });
    }
})


module.exports = app;