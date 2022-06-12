const express = require('express');
const bodyParser= require('body-parser')
const app = express();

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
