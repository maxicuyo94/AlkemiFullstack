const server = require("express").Router();
const { Pokemon } = require("../db.js");

server.get("/", (req, res, next) => {
  Pokemon.findAll()
    .then((pokemons) => {
      res.send(pokemons);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
});

module.exports = server;
