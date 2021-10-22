const server = require("express").Router();
const { Operation } = require("../db.js");
const controller = {};

controller.getAll = async (req, res) => {
  try {
    let operations = await Operation.findAll();
    res.send(operations);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

controller.add = async (req, res) => {
  let { concept, amount, date, type } = req.body;
  try {
    let newOperation = await Operation.create({ concept, amount, date, type });
    res.send(newOperation);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

controller.delete = async (req, res) => {
  let { id } = req.body;
  try {
    let deleted = await Operation.destroy({ where: { id } });
    res.status(200).json(deleted);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

controller.update = async (req, res) => {
  let { concept, amount, date, id } = req.body;
  try {
    let updated = await Operation.update(
      { concept, amount, date },
      { where: { id } }
    );
    res.status(200).json(updated);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

// controller.balance = async (req, res) => {
//   try {
//     res.send(req);
//   } catch (error) {
//     handleError(error);
//   }
// };

server.get("/", controller.getAll);

server.post("/add", controller.add);

server.delete("/delete", controller.delete);

server.put("/update", controller.update);

// server.get("/balance", controller.balance)

module.exports = server;
