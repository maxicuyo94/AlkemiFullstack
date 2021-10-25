const server = require("express").Router();
const controller = require("../controller/transaction");

server.get("/", controller.getAll);

server.post("/add", controller.add);

server.delete("/delete", controller.delete);

server.put("/update", controller.update);

server.get("/balance", controller.balance);

server.get("/filter/:filter", controller.filter);

module.exports = server;
