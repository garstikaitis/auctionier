import mongoose from 'mongoose';
import { Item } from './model';
import cloudinary from 'cloudinary';
import multer from 'multer';
const fs = require('fs');

export const getItems = (req, res) => {
  Item.find({}, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
};

export const createItem = (req, res) => {
  cloudinary.v2.uploader.upload(req.file.path, (err, img) => {
    if (err) throw err;
    const image = img.secure_url;
    const object = { ...req.body, image };
    const newItem = new Item(object).save((err, item) => {
      if (err) throw err;
      res.json({ item });
    });
    fs.unlinkSync(req.file.path);
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
