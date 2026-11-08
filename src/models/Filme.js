const { DataTypes } = require("sequelize");
const sequelize  = require("../config/config");

const Filme = sequelize.define(
    "Filme",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      duracao_minutos: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      descricao: {
        type: DataTypes.TEXT,
      },
      data_criacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    { tableName: "filme", timestamp: false },
  );
  module.exports = Filme
