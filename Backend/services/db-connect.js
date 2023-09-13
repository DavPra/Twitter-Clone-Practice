const Sequelize = require('sequelize');

const sequelize = new Sequelize ('twitter-clone', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

sequelize.sync({alter: true})

module.exports = sequelize;