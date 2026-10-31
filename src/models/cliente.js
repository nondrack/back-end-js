const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    status: {
        type: DataTypes.STRING,
        default: 'ativo'
    }
})


module.exports = Cliente;