import { Router } from 'express';
import { UsersController } from '../controllers';

const usersRouter: Router = Router();
const usersController: UsersController = new UsersController();

usersRouter.get('/:id', usersController.get);
usersRouter.post('/', usersController.post);
usersRouter.put('/:id', usersController.put);
usersRouter.delete('/:id', usersController.delete);

export { usersRouter };
