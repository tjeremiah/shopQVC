// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database');
const Category = require('./category');
const Product = require('./product');
const Customer = require('./customer');
const Delivery = require('./delivery');
const Order = require('./order');
const Payment = require('./payment');
const Transaction = require('./transaction');

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)
// Campus.hasMany(Student)
// Student.belongsTo(Campus)

Category.hasMany(Product);
Product.belongsTo(Category);

Customer.hasMany(Product);
Product.belongsTo(Customer);

Customer.hasMany(Category);
Category.belongsTo(Customer);

Customer.hasMany(Payment);
Payment.belongsTo(Customer);

Customer.hasMany(Delivery);
Delivery.belongsTo(Customer);

Customer.hasMany(Product, { through: 'Transaction'})
Customer.belongsTo(Product, { through: 'Transaction'})

Order.hasMany(Product, { through: 'Transaction'})
Order.belongsTo(Product, { through: 'Transaction'})

Payment.hasMany(Product, { through: 'Transaction'})
Payment.belongsTo(Product, { through: 'Transaction'})




module.exports = {
  // Include your models in this exports object as well!
  db,
  Student,
  Campus,
}