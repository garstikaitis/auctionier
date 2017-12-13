const mongoose = require('mongoose');
import jwt from 'jsonwebtoken';
import User from './model';
import { Item } from '../items';

export const login = (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    console.log(user);
    if (err) throw err;
    if (!user) {
      res.json({ message: 'User not found' });
    } else if (user) {
      if (user.password != req.body.password) {
        res.json({ message: 'Password does not match' });
      } else {
        const payload = {
          admin: user.admin,
        };
        const token = jwt.sign(payload, process.env.SECRET, {
          expiresIn: 1440,
        });
        res.json({ success: true, message: 'Enjoy your token!', token });
      }
    }
  });
};

export const getUsers = (req, res) => {
  User.find({}, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
};

export const createUser = (req, res) => {
  const newUser = new User(req.body).save((err, data) => {
    if (err) throw err;
    res.json(data);
  });
};

export const getUserById = (req, res) => {
  User.findById({ _id: req.params.id }, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
};

export const deleteUser = (req, res) => {
  User.findByIdAndRemove({ _id: req.params.id }, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
};

export const addItemToUser = (req, res) => {
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
};
