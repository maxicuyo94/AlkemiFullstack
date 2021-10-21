const server = require("express").Router();
const { Operation } = require("../db.js");

server.get("/", (req, res, next) => {
  Operation.findAll()
    .then((operations) => {
      res.send(operations);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
});

module.exports = server;
