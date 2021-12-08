//const index = require('./index')

const {Album, Song, sequelize} = require('./index') 

desribe('Song Database', () => {

    beforeAll(async () => {

    await sequelize.sync({force:true})

    // // await Album.create
    // const album1 = ({ 
    //     name: "Don't smile at me", genre: 'R&B', noOfSongs: 8 //released: 2017-08-11 
    // })

    // // await Song.create
    // const song1 = ({
    //     name: 'Ocean Eyes', singer: 'Billie Eilish', length: 3.20, IsMostPopular: true 
    // })

    // await Album.create(album1)
    // await Song.create(song1)

    })

        test('album has a name', async () => {
        const testalbum = await Menu.findOne({where: {name: "Don't smile at me"}}); 
        expect(testalbum.name).toBe("Don't smile at me")
        
    })

    afterAll(async()=> {
        // await sequelize.sync({force:true})
        sequelize.close()
    })

})


//     test ('can create a musician', async() => {
//         await Musician.create({name: 'Dire Straits', instrument: 'guitar'})
//         const testMusician = await Musician.create({name: })
//     })
