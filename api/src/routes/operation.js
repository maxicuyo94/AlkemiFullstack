const server = require("express").Router();
const { Operation } = require("../db.js");
const controller = {};

controller.getAll = async (req, res, next) => {
  try {
    let operations = await Operation.findAll();
    res.send(operations);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
controller.add = async (req, res, next) => {
  let { concept, amount, date, type } = req.body;
  try {
    let newOperation = await Operation.create({ concept, amount, date, type });
    res.send(newOperation);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
controller.delete = async (req, res, next) => {
  let { id } = req.body;
  try {
    Operation.destroy({
      where: {
        id,
      },
    });

    res.send(req);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

// controller.updateasync (req, res, next) => {
//   try {
//     res.send(req)
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);
//   }
// };

// controller.balance= async (req, res, next) => {
//   try {
//     res.send(req);
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);
//   }
// }

server.get("/", controller.getAll);

server.post("/add", controller.add);

server.delete("/delete", controller.delete);

// server.put("/update", controller.update)

// server.get("/balance", controller.balance)

module.exports = server;
