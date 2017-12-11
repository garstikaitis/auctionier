const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import { itemSchema } from '../items/model';

const userSchema = Schema({
  username: String,
  password: String,
  admin: Boolean,
  items: [itemSchema],
});

const User = mongoose.model('User', userSchema);

export default User;
