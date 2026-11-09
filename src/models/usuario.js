const { Datatypes } = require ("sequelize");
const sequelize = require('../config/config');
const { AutoIncrement } = require("@sequelize/core/decorators-legacy");

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.TINYINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  id_pessoa: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    unique: 'usuario_id_pessoa_unique', // Mantém a restrição UNIQUE do seu SQL
    references: {
      model: 'pessoa', // Nome exato da tabela de destino no banco
      key: 'id_pessoa'
    }
  },
  login: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: 'usuario_login_unique' // Mantém a restrição UNIQUE do seu SQL
  },
  senha: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  adm: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false // Equivalente ao DEFAULT 0
  }
}, {
  tableName: 'usuario', // Força o Sequelize a usar o nome exato da tabela em minúsculo
  timestamps: false     // Desativa as colunas automáticas createdAt e updatedAt do Sequelize
});

module.exports = Usuario;