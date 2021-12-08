const express = require('express')
const path = require('path')

//const { Album } = require('./models/Album')
//const { Song } = require('./models/Song')
const { Album, Song } = require('./index')


const app = express();
const port = 3000;


app.get("/now", (request, response) => {
    const date = new Date();
    console.log(response.baseUrl + date)
    // console.log(response.location)
    response.send(date);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
