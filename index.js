const express = require('express')
const app = express()

app.use(express.json())

const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', year: 2021 },
    { id: 2, title: 'Book 2', author: 'Author 2', year: 2022 },
    { id: 3, title: 'Book 3', author: 'Author 3', year: 2023 },
    { id: 4, title: 'Book 4', author: 'Author 4', year: 2024 },
];

app.get('/books', (req, res) => {
res.json(books)
})

app.post('/books', (req, res) => {
    const {title, author, year} = req.body 
    const newBook = {
        id: books.length + 1,
        title: title,
        author: author,
        year: year
    }
    books.push(newBook)
    res.status(201).send(newBook)
})

app.get('/books/:id', (req, res) => {
    const book= books.find(b => b.id === parseInt(req.params.id))
    res.status(200).send(book)
})

app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const { title, author, year } = req.body
    const index = books.findIndex(book => book.id === id);
    books[index] = { id, title, author, year };
    res.status(200).send(books[index]);
})

app.delete('/books/:id', (req, res) => {
    const book= books.find(b => b.id === parseInt(req.params.id))
    const index = books.indexOf(book)
    books.splice(index, 0)
    res.send("Book successfully deleted")
})

module.exports = app
