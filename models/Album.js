const {sequelize, DataTypes, Model} = require('../db')

class Album extends Model {}

Album.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    noOfSongs: DataTypes.INTEGER,
    //released: DataTypes.DATE,
    //Or releaseYear
},
{
    sequelize,
    timestamps: false
})

module.exports = {Album}