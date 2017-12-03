const mongoose = require('mongoose');
const User = require('../models/User');
const { Item } = require('../models/Item.js');

module.exports = app => {
  app.get('/user', (req, res) => {
    User.find({}, (err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });

  app.post('/user', (req, res) => {
    const newUser = new User(req.body).save((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });

  app.get('/user/:id', (req, res) => {
    User.findOne({ _id: req.params.id })
      .populate('items.name')
      .exec((err, items) => {
        console.log(items);
        if (err) throw err;
        res.json(items);
      });
  });

  app.delete('/user/:id', (req, res) => {
    User.findByIdAndRemove({ _id: req.params.id }, (err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });

  app.put('/user/:userId/:itemId', (req, res) => {
    User.findById({ _id: req.params.userId })
      .populate('items')
      .exec((err, data) => {
        if (err) throw err;
        Item.findById({ _id: req.params.itemId }, (err, item) => {
          if (err) throw err;
          data.items.push(item);
          data.save(err => {
            if (err) throw err;
            res.json(data);
          });
        });
      });
  });
};
