// This is our seed file. We'll import our Sequelize models from

//2022_04_08_tech_level_up_mock_google
// ./database/index and create some dummy data in the database. Seeding a
// database is very useful for development.
//const { blue, cyan, green, red } = require('chalk');


const db   = require('./server/db/database');
const { green, red } = require ('chalk');

const Product = require('./server/db/models/product')

async function seed() {
  try {
    console.log(green('📡 Connecting to the database...'));
    // Connect to the database
    await db.sync({force: true});

    console.log('🌱 Seeding the database...');

    // Seed the database
      const cauliflower = await Product.create({name: 'Cauliflower'});
      console.log('cauliflower instance >>>>', cauliflower);
      console.log('cauliflower name >>>>', cauliflower.name);
      
      await cauliflower.update({ name: 'Pale Broccoli' });
      console.log('updated cauliflower name >>>>', cauliflower.name);

    // Close the database connection
    await db.close();

    console.log('🌲 Finished seeding the database!');
    await db.close();
  } catch (err) {
    console.log('🔥 An error occured!!');
    console.error(err);
    await db.close();
   }
}
seed();
