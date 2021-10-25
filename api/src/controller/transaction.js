const { Transaction } = require("../db.js");
const transaction = {};

transaction.getAll = async (req, res) => {
  try {
    let allTransactions = await Transaction.findAll();
    res.send(allTransactions);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

transaction.add = async (req, res) => {
  let { concept, amount, date, type } = req.body;
  try {
    let newTransaction = await Transaction.create({ concept, amount, date, type });
    res.send(newTransaction);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

transaction.delete = async (req, res) => {
  let { id } = req.body;
  try {
    let deleted = await Transaction.destroy({ where: { id } });
    res.status(200).json(deleted);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

transaction.update = async (req, res) => {
  let { concept, amount, date, id } = req.body;
  try {
    let updated = await Transaction.update(
      { concept, amount, date },
      { where: { id } }
    );
    res.status(200).json(updated);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

transaction.balance = async (req, res) => {
  let balance = 0;
  try {
    let allTransactions = await Transaction.findAll();
    allTransactions.map((op) => {
      op.type === "outflow" ? (balance -= op.amount) : (balance += op.amount);
    });
    res.status(200).json(balance);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

transaction.filter = async (req, res) => {
  let filter = req.params.filter;
  try {
    const query = {
      first: { limit: 10 },
      outflow: { where: { type: "outflow" } },
      inflow: { where: { type: "inflow" } },
    };
    let filteredTransactions = await Transaction.findAll({ ...query[filter] });
    res.send(filteredTransactions);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = transaction;
