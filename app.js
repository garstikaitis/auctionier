const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const itemController = require('./controllers/itemController');

mongoose.connect('mongodb://localhost:27017/auction', {
  useMongoClient: true,
});
mongoose.Promise = global.Promise;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

itemController(app);

app.listen(3000, () => console.log('App is listening on port 3000'));
