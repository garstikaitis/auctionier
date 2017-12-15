import mongoose from 'mongoose';
import { Item } from './model';
import cloudinary from 'cloudinary';

export const getItems = (req, res) => {
  Item.find({}, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
};

export const createItem = (req, res) => {
  const newItem = new Item(req.body).save((err, data) => {
    if (err) throw err;
    console.log(req.files);
    cloudinary.v2.uploader.upload(req.files.itemImg, (err, image) => {
      if (err) throw err;
      res.json(data);
    });
  });
};

export const getItemById = (req, res) => {
  Item.find({ _id: req.params.id }, (err, data) => {
    if (err) throw err;
    res.json(data[0]);
  });
};

export const deleteItem = (req, res) => {
  Item.findByIdAndRemove({ _id: req.params.id }, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
};
