const Sequelize = require('sequelize');
const db = require('../database');

const Order = db.define(order, {
    date: {
        type: INTEGER,
    }
});

module.exports = Order;