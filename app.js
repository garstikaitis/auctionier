require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const itemController = require('./controllers/itemController');
const userController = require('./controllers/userController');
const middleware = require('./controllers/middlewares');

mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true,
});
mongoose.Promise = global.Promise;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

middleware(app);
itemController(app);
userController(app);

app.listen(process.env.PORT || 3000);
console.log('You are listening to port ', process.env.PORT);
