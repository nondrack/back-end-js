const sequelize = require('./src/config/config')
const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;
const filmeRouter = require('./src/routes/filmeRoutes');
const clienteRouter = require('./src/routes/clienteRoutes')

const Cliente = require("./src/models/cliente"); 

app.use(express.json());

router.get("/", (req, res) => {
  res.send("Servidor de Upload está no ar!");
});

app.use(clienteRouter)
app.use(filmeRouter)

app.use(router);

module.exports = router;

sequelize.sync({ alter: true }).then(() => {
  app.listen(port, () =>{
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
}).catch(err => console.error("Erro ao sincronizar com banco", err))