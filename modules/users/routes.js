import { Router } from 'express';
import * as UserController from './controller';

const routes = new Router();

routes.get('/users', UserController.getUsers);
routes.get('/users/:id', UserController.getUserById);
routes.post('/signup', UserController.createUser);
routes.delete('/users/:id', UserController.deleteUser);
routes.put('/users/:id', UserController.addItemToUser);
routes.post('/login', UserController.login);

export default routes;
