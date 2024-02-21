const express = require('express');
const app = express();

// Middleware
app.use(express.json());




let books = []



//desc get all books
app.get('/books', (req, res) => {
  res.status(200).json(books)
})

//desc create a book
app.post('/books', (req, res) => {
const book = {id: books.length + 1, ...req.body}
books.push(book)
res.status(201).json(book)
})

//desc get a book by id
app.get('/books/:id', (req, res) => {
  const book = books.find((book) => book.id === parseInt(req.params.id))
  if (!book) {
    res.status(404).json({ message: 'Book not found' })
  } else {
    res.status(200).json(book)
  }
})

//desc update a book
app.put('/books/:id', (req, res) => {
  const book = books.find((book) => book.id === parseInt(req.params.id))
  if (!book) {
    res.status(404).json({ message: 'Book not found' })
  } else {
    book.title = req.body.title
    book.author = req.body.author
    book.year = req.body.year
    res.status(200).json(book)
  }
})

//desc delete a book
app.delete('/books/:id', (req, res) => {
  const book = books.find((book) => book.id === parseInt(req.params.id))
  if (!book) {
    res.status(404).json({ message: 'Book not found' })
  } else {
    books = books.filter((book) => book.id !== parseInt(req.params.id))
    res.status(200).json({ message: 'Book successfully deleted' })
  }
})



module.exports = app;