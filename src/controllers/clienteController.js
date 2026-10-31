const Cliente = require('../models/cliente');

const clienteController = {
    findAll: async (req, res) => {
        const cliente = await Cliente.findAll();
        return res.status(200).json(cliente);
    },
    findById: async (req, res) =>{
        const { id } = req.params;
        const cliente = await Cliente.findByPk(id)
        return res.status(200).json(cliente);
    },
    create: async (req, res) =>{
        const { nome , email } = req.body;
        const novoCliente = await Cliente.create({nome, email});
        return res.status(201).json(novoCliente);
    }
};
 

module.exports = clienteController;