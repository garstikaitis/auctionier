const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Item = require('../models/Item');

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

module.exports = app => {
  app.get('/item', urlEncodedParser, (req, res) => {
    Item.find({}, (err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });

  app.post('/item', urlEncodedParser, (req, res) => {
    const newItem = new Item(req.body).save((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });
};
