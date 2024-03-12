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


  module.exports = app;