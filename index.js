const {sequelize, DataTypes, Model} = require('./db')

const {Album} = require('./models/Album')
const {Song} = require('./models/Song')

Song.belongsTo(Album)
Album.hasMany(Song)

module.exports = {Album, Song, sequelize}