const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './music.sqlite',
    logging: false
})

module.exports = {sequelize, DataTypes, Model}



// const db = new sqlite3.Database(':memory:', (err) => {
//         if (err) {
//         return console.error(err.message);
//         }
//         console.log('Connected to the in-memory SQlite database.');
//     });
  
//     // close the database connection
//     db.close((err) => {
//         if (err) {
//         return console.error(err.message);
//         }
//         console.log('Close the database connection.');
//     });