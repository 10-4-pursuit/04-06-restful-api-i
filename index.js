const Joi = require('joi');
const express = require("express");
const app = express();

//middleware
app.use(express.json());

const books = [
    {
      id: 1,
      title: "book1",
    },
    {
      id: 2,
      title: "book2",
    },
    {
      id: 3,
      title: "book3",
    },
  ];

  app.get("/", (req, res) => {
    res.send("Save The Planet"); 
  });

  app.get("/api/books", (req, res) => {
    res.send(books);
  });

  app.get("/api/books/:id", (req, res) => {
    const findBook = books.find((book) => book.id === parseInt(req.params.id));
  
    if (!findBook) {
      res.status(404).send("The book was not found");
      return
    }
  
    res.send(findBook); //route handler
  });






  function validateBook(book) {
    const schema = Joi.object({
        title: Joi.string().required()
    })

   return schema.validate(book);

}


  module.exports = app;