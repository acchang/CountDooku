const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

const dotenv = require('dotenv') // .env file
dotenv.config() // using .env
const connectionString = `mongodb+srv://${process.env.USERNAME}:${process.env.PW}@cluster0.iyram.mongodb.net/?retryWrites=true&w=majority`;


MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('DookuLog')
    const BMcollection = db.collection('events')


    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html')
    })

    app.post('/log', (req, res) => {
      BMcollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })
  
    app.listen(3000, function() {
      console.log('listening on 3000')
    })
  })

console.log('The Dooku is Strong With This One') 


