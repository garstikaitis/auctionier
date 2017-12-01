const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  name: String,
  price: Number,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
