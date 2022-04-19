const Sequelize = require('sequelize');
const db = require('../database');

const Delivery = db.define(delivery, {
    date: {
        type: INTEGER,
    }
});

module.exports = Delivery;