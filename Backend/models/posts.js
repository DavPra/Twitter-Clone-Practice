const Sequelize = require('sequelize');
const sequelize = require('../services/db-connect')

const posts = sequelize.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    content:{
        type: Sequelize.STRING,
        allowNull: false
    },


},
    {
        timestamps: true
        });

module.exports = posts;