require('dotenv').config();
import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
// import { ItemRoutes, UserRoutes } from './modules';
import ItemRoutes from './modules/items/routes';
import UserRoutes from './modules/users/routes';
import checkAuth from './modules/middlewares/middlewares';
const MongoStore = require('connect-mongo')(session);
import cloudinary from 'cloudinary';

mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true,
});
mongoose.Promise = global.Promise;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use(
  session({
    cookieName: 'session',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({ url: process.env.MONGODB_URI }),
  }),
);
app.use(checkAuth);
app.use('/api', [UserRoutes, ItemRoutes]);

app.listen(process.env.PORT || 3000);
console.log('You are listening to port ', process.env.PORT);
