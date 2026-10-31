const sequelize = require('./config/config')
const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;
const clienteController = require('./controllers/clienteController')


const Cliente = require("./models/cliente"); 

app.use(express.json());

router.get("/", (req, res) => {
  res.send("Servidor de Upload está no ar!");
});


router.post('/Cliente', clienteController.create);
router.get('/Cliente', clienteController.findAll);
router.get('/Cliente/:id', clienteController.findById)


app.use(router);

module.exports = router;

sequelize.sync({ alter: true }).then(() => {
  app.listen(port, () =>{
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
}).catch(err => console.error("Erro ao sincronizar com banco", err))