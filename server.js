const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

const dotenv = require('dotenv') // .env file
dotenv.config() // using .env
const connectionString = `mongodb+srv://${process.env.USERNAME}:${process.env.PW}@cluster0.jqbcy.mongodb.net/?retryWrites=true&w=majority`;


MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    

app.use(bodyParser.urlencoded({ extended: true }))

console.log('The Dooku is Strong With This One')

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
  })

app.post('/log', (req, res) => {
  console.log(req.body)
  })

app.listen(3000, function() {
    console.log('listening on 3000')
  })
