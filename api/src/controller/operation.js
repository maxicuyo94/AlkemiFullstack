const { Operation } = require("../db.js");
const operation = {};

operation.getAll = async (req, res) => {
  try {
    let allOperations = await Operation.findAll();
    res.send(allOperations);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

operation.add = async (req, res) => {
  let { concept, amount, date, type } = req.body;
  try {
    let newOperation = await Operation.create({ concept, amount, date, type });
    res.send(newOperation);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

operation.delete = async (req, res) => {
  let { id } = req.body;
  try {
    let deleted = await Operation.destroy({ where: { id } });
    res.status(200).json(deleted);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

operation.update = async (req, res) => {
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

operation.balance = async (req, res) => {
  let balance = 0;
  try {
    let allOperations = await Operation.findAll();
    allOperations.map((op) => {
      op.type === "egress" ? (balance -= op.amount) : (balance += op.amount);
    });
    res.status(200).json(balance);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

operation.filter = async (req, res) => {
  let filter = req.params.filter;
  try {
    const query = {
      first: { limit: 10 },
      egress: { where: { type: "egress" } },
      entry: { where: { type: "entry" } },
    };
    let filteredOperations = await Operation.findAll({ ...query[filter] });
    res.send(filteredOperations);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = operation;
