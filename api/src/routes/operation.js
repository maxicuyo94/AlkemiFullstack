const server = require("express").Router();
const { Operation } = require("../db.js");
server.post("/add", async (req, res, next) => {
  let { concept, amount, date, type } = req.body;
  try {
    let newOperation = await Operation.create({ concept, amount, date, type });
    res.send(newOperation);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

server.get("/", async (req, res, next) => {
  try {
    let operations = await Operation.findAll();
    res.send(operations);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// server.put("/", async (req, res, next) => {
//   try {
//     res.send(req);
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);
//   }
// });

// server.delete("/", async (req, res, next) => {
//   try {
//     res.send(req);
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);
//   }
// });

// server.get("/balance", async (req, res, next) => {
//   try {
//     res.send(req);
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);
//   }
// });

module.exports = server;
