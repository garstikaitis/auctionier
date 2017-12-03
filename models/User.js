const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { itemSchema } = require('./Item');

const userSchema = Schema({
  username: String,
  password: String,
  admin: Boolean,
  items: [itemSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
