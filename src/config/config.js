const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    'cinema_simples', 
    'root',           
    '1234',           
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        logging: false
    }
);

sequelize.authenticate()
    .then(() => console.log('Concexao feita'))
    .catch(err => console.error('Erro ao conectar', err.message));

module.exports = sequelize