const Joi = require('joi');
const express = require("express");
const app = express();

//middleware
app.use(express.json());

const books = [
    {
      id: 1,
      title: "book1",
      author: "Author 01",
      year: 2018
    },
    {
      id: 2,
      title: "book2",
      author: "Author 02",
      year: 2019
    },
    {
      id: 3,
      title: "book3",
      author: "Author 03",
      year: 2020
    },
  ];

  app.get("/", (req, res) => {
    res.send("Save The Planet"); 
  });


  //route handler for viewing all books
  app.get("/books", (req, res) => {
    res.send(books);
  });

   //route handler for viewing books by id
  app.get("/books/:id", (req, res) => {
    const findBook = books.find((book) => book.id === parseInt(req.params.id));
  
    if (!findBook) {
      res.status(404).send("The book was not found");
      return
    }
  
    res.send(findBook); //route handler
  });

   //route handler for creating a new book
  app.post("/books", (req, res) => {

    const { error } = validateBook(req.body);
    if (error) {
        res.status(400).send(error.details[0].message)
        return;
    }


  const book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    year: req.body.year
  };

  books.push(book);

  res.status(201).send(book); 
});

// //route handler for updating a book
app.put("/books/:id", (req, res) => {
    const findBookById = books.find((book) => book.id === parseInt(req.params.id));
    if (!findBookById) {
      res.status(404).send("The book was not found");
      return;
    }

 
    const { error } = validateBook(req.body);
    if (error) {
        res.status(400).send(error.details[0].message)
        return;
    }


    findBookById.title = req.body.title
    findBookById.author = req.body.author

    res.send(findBookById); 

});

// way to validate input
  function validateBook(book) {
    const schema = Joi.object({
        title: Joi.string(),
        author: Joi.string(),
        year: Joi.number()
    })//in the future, make sure to add ".requirements() to add more security to the code"

   return schema.validate(book);

}

//route handler to delete book
app.delete('/books/:id', (req, res) => { 
    const findBook = books.find((book) => book.id === parseInt(req.params.id));
    if (!findBook) {
      res.status(404).send("The book was not found");
      return;
    }

    const index = books.indexOf(findBook); 
    books.splice(index, 1);

    res.status(200).send('Book successfully deleted')


})


  module.exports = app;