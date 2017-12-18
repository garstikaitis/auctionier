import mongoose from 'mongoose';
import { Item } from './model';
import cloudinary from 'cloudinary';
import multer from 'multer';

export const getItems = (req, res) => {
  Item.find({}, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
};

export const createItem = (req, res) => {
  cloudinary.v2.uploader.upload(req.file.path, (err, img) => {
    const image = img.secure_url;
    const object = { ...req.body, image };
    console.log(object);
    const newItem = new Item(object).save((err, item) => {
      if (err) throw err;
      res.json({ item });
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
