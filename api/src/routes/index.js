const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const pokemon = require("./pokemon.js");
const operation = require("./operation.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use("/pokemons", pokemon);
router.use("/operations", operation);

module.exports = router;
