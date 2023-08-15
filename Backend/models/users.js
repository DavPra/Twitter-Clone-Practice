const sequelize = require('../services/db-connect')
const Sequelize = require('sequelize')

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    displayName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

}, {
    timestamps: false
})