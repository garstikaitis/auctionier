const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = Schema({
  name: String,
  price: Number,
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
  image: String,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = { Item, itemSchema };
