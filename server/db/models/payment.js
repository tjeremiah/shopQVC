const Sequelize = require('sequelize');
const db = require('../database');

const Payment = db.define(payment, {
    date: {
       type: INTEGER,
    }
});


module.exports = Payment;