const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

const dotenv = require('dotenv') // .env file
dotenv.config() // using .env
const connectionString = `mongodb+srv://${process.env.USERNAME}:${process.env.PW}@cluster0.iyram.mongodb.net/?retryWrites=true&w=majority`;

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('DookuLog')
    const BMcollection = db.collection('events')

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.static('public'))
    app.set('view engine', 'ejs')

    app.get('/', (req, res) => {
      db.collection('events').find().toArray()
      .then(results => {
        res.render('index.ejs', { events: results })
      })
      .catch(error => console.error(error))
  })

    app.post('/log', (req, res) => {
      BMcollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })
  
// need something to update, flag or not? Was the Force Strong with this one?


    app.delete('/events', (req, res) => {
      BMcollection.deleteOne(
        { Date: req.body.date }, { Dookawan: req.body.Dookawan },
      )
        .then(result => {
          if (result.deletedCount === 0) {
            return res.json('No quote to delete')
          }
          res.json(`Deleted it`)
        })
        .catch(error => console.error(error))
    })



  //   app.delete('/deleteRapper', (request, response) => {
  //     db.collection('rappers').deleteOne({stageName: request.body.stageNameS})
  //     .then(result => {
  //         console.log('Rapper Deleted')
  //         response.json('Rapper Deleted')
  //     })
  //     .catch(error => console.error(error))
  
  // })
  



    app.listen(3000, function() {
      console.log('listening on 3000')
    })


  })


