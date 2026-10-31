const sequelize = require('./config/config')
const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;
const clienteController = require('./controllers/clienteController');
const filmeController = require('./controllers/filmeController');


const Cliente = require("./models/cliente"); 

app.use(express.json());

router.get("/", (req, res) => {
  res.send("Servidor de Upload está no ar!");
});


router.post('/Cliente', clienteController.create);
router.get('/Cliente', clienteController.findAll);
router.get('/Cliente/:id', clienteController.findById)

router.post('/Filme', filmeController.create);
router.get('/Filme', filmeController.findAll);
router.get('/Filme/:id', filmeController.findById)
router.put('/Filme/:id', filmeController.update)
router.delete('/Filme/:id', filmeController.delete)
app.use(router);

module.exports = router;

sequelize.sync({ alter: true }).then(() => {
  app.listen(port, () =>{
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
}).catch(err => console.error("Erro ao sincronizar com banco", err))