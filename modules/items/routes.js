import { Router } from 'express';
import * as ItemController from './controller';

const routes = new Router();

routes.get('/items', ItemController.getItems);
routes.get('/items/:id', ItemController.getItemById);
routes.post('/items', ItemController.createItem);
routes.delete('/items/:id', ItemController.deleteItem);

export default routes;
