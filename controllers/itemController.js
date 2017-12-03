const mongoose = require('mongoose');
const { Item } = require('../models/Item');

module.exports = app => {
  app.get('/item', (req, res) => {
    Item.find({}, (err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });

  app.post('/item', (req, res) => {
    const newItem = new Item(req.body).save((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });

  app.get('/item/:id', (req, res) => {
    Item.find({ _id: req.params.id }, (err, data) => {
      if (err) throw err;
      res.json(data[0]);
    });
  });

  app.delete('/item/:id', (req, res) => {
    Item.findByIdAndRemove({ _id: req.params.id }, (err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });
};
