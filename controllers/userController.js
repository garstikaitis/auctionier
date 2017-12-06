const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { Item } = require('../models/Item.js');

module.exports = app => {
  app.post('/login', (req, res) => {
    User.findOne({ username: req.body.username }, (err, user) => {
      console.log(user);
      if (err) throw err;
      const payload = {
        admin: user.admin,
      };
      const token = jwt.sign(payload, process.env.SECRET, {
        expiresIn: 1440,
      });
      res.json({ success: true, message: 'Enjoy your token!', token });
    });
  });

  app.get('/user', (req, res) => {
    // console.log(req);
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
    User.findById({ _id: req.params.id }, (err, data) => {
      if (err) throw err;
      res.json(data);
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
