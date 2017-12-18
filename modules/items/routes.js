import { Router } from 'express';
import cloudinary from 'cloudinary';
import * as ItemController from './controller';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: './uploads',
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const routes = new Router();

routes.get('/items', ItemController.getItems);
routes.get('/items/:id', ItemController.getItemById);
routes.post('/items', upload.single('itemImage'), ItemController.createItem);
routes.delete('/items/:id', ItemController.deleteItem);

export default routes;
