import { Router } from 'express';
import { UsersController } from '../controllers';

const usersRouter: Router = Router();
const usersController: UsersController = new UsersController();

usersRouter.get('/', usersController.get);
usersRouter.post('/', usersController.post);
usersRouter.put('/', usersController.put);
usersRouter.delete('/', usersController.delete);

export { usersRouter };
