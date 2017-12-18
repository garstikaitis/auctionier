import { Router } from 'express';
import cloudinary from 'cloudinary';
import * as ItemController from './controller';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

const routes = new Router();

routes.get('/items', ItemController.getItems);
routes.get('/items/:id', ItemController.getItemById);
routes.post('/items', upload.single('avatar'), ItemController.createItem);
routes.delete('/items/:id', ItemController.deleteItem);
// routes.post('/upload', upload.single('avatar'), (req, res) => {
//   console.log(req.file);
// });

export default routes;
