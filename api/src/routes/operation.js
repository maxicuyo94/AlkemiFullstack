const server = require("express").Router();
const { Operation } = require("../db.js");
const controller = {};
const handleError = (error) => {
  console.log(error);
  res.status(400).send(error);
};

controller.getAll = async (req, res) => {
  try {
    let operations = await Operation.findAll();
    res.send(operations);
  } catch (error) {
    handleError(error);
  }
};

controller.add = async (req, res) => {
  let { concept, amount, date, type } = req.body;
  try {
    let newOperation = await Operation.create({ concept, amount, date, type });
    res.send(newOperation);
  } catch (error) {
    handleError(error);
  }
};

controller.delete = async (req, res) => {
  let { id } = req.body;
  try {
    const deleted = await Operation.destroy({ where: { id } });
    res.send(deleted);
  } catch (error) {
    handleError(error);
  }
};

controller.update = async (req, res) => {
  let { concept, amount, date, id } = req.body;
  try {
    const updated = await Operation.update(
      { concept, amount, date },
      { where: { id } }
    );
    res.send(updated);
  } catch (error) {
    handleError(error);
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

// server.put("/update", controller.update)

// server.get("/balance", controller.balance)

module.exports = server;
