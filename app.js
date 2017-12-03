require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const itemController = require('./controllers/itemController');
const userController = require('./controllers/userController');
const middleware = require('./controllers/middlewares');

mongoose.connect(process.env.CONN_STRING, {
  useMongoClient: true,
});
mongoose.Promise = global.Promise;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

middleware(app);
itemController(app);
userController(app);

app.listen(3000, () => console.log('App is listening on port 3000'));
