const express = require('express');
const app = express();

console.log('The Dooku is Strong With This One')

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
  })

app.listen(3000, function() {
    console.log('listening on 3000')
  })
