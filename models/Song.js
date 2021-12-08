const {sequelize, DataTypes, Model} = require('../db')

class Song extends Model {}

Song.init({
    name: DataTypes.STRING,
    singer: DataTypes.STRING,
    length: DataTypes.DECIMAL (2,2),
    IsMostPopular: DataTypes.BOOLEAN,
}, 
{
    sequelize,
    timestamps: false
})

module.exports = {Song}