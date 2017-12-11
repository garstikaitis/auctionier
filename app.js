require('dotenv').config();
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
// import { ItemRoutes, UserRoutes } from './modules';
import ItemRoutes from './modules/items/routes';
import middleware from './modules/middlewares/middlewares';
mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true,
});
mongoose.Promise = global.Promise;

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors());
// app.use(morgan('combined'));
app.use(middleware);

app.use('/api', ItemRoutes);

app.listen(process.env.PORT || 3000);
console.log('You are listening to port ', process.env.PORT);
