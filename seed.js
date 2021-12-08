const {sequelize} = require('./db')
const { Album, Song } = require('./index')

const seedAlbum = [
    {
    name: "Don't smile at me", 
    genre: 'R&B', 
    noOfSongs: 8 
    //released: 2017-08-11
    },
]
const seedSong = [
    {
        name: 'Ocean Eyes', 
        singer: 'Billie Eilish', 
        length: 3.20, 
        IsMostPopular: true
    }
]
const seed = async () => {
    try {
    await sequelize.sync({force: true})
    await Album.create(seedAlbum[0], {validate: true})
    await Song.create(seedSong[0], {validate: true})

    console.log('Seeding success!')
    sequelize.close()
    } catch (error) {
    console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
    }
}

seed()
.then(() => {
        console.log('Seeding success!')
    })
    .catch(err => {
        console.error('Oh noes! Something went wrong!')
        console.error(err)
    })
