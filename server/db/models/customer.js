const Sequelize = require('sequelize');
const db = require('../database');

const Customer = db.define(customer, {
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        Unique: true,
    },
    hashedpassword: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
            is: /^[0-9a-f]{64}$/i
          }

    },
    address: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    }
});

Customer.beforeCreate((customer) => {
    customer.firstname = `${customer.firstname[0].toupperCase()}${customer.firstname.slice(1)}`;
});

Customer.beforeCreate((customer) => {
    customer.lastname = `${customer.lastname[0].toupperCase()}${customer.firstname.slice(1)}`;
});

module.exports = Customer;