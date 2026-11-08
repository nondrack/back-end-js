const Filme = require("../models/Filme");

const filmeController = {
  create: async (req, res) => {
    const { nome, duracao_minutos, descricao, data_criacao } = req.body;
    const novoFilme = await Filme.create({
      nome,
      duracao_minutos,
      descricao,
      data_criacao,
    });
    return res.status(200).json(novoFilme);
  },
  findAll: async (req, res) => {
    const filme = await Filme.findAll();
    return res.status(200).json(filme)
  },
  findById: async (req, res) => {
    const { id } = req.params;
    const filme = await Filme.findByPk(id);
    return res.status(200).json(filme)
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { nome, duracao_minutos, descricao, data_criacao } = req.body;
    const filme = await Filme.findByPk(id);

    await filme.update({
        nome,
        duracao_minutos,
        descricao,
        data_criacao,
    });
    return res.status(200).json(filme)
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const filme = await Filme.findByPk(id);

    await filme.destroy();

    return res.status(200).json(filme)
  }
};
module.exports = filmeController; 
