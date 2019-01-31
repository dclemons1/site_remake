const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'pug')
app.get('/', function (req, res) {
    res.render('index.pug')
  })
  app.use(express.static(path.join(__dirname,'/style')));

app.listen(3000)