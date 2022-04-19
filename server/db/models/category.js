const Sequelize = require('sequelize');
const db = require('../database')

const Category = db.define(category, {
    name: {
        type: Sequelize.STRING,
         allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Category.beforeCreate((category) => {
    category.name =`${category.name[0].toupperCase}${category.name.slice(1)}`; 
});

module.exports = Category;