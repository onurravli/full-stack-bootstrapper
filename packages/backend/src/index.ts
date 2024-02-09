import express, { type Application } from 'express';
import { env } from './utils';
import { guvercin } from './services';
import { usersRouter } from './routers';

const app: Application = express();
const port: number = parseInt(env.PORT as string) || 3001;

app.use('/users', usersRouter);

app.listen(port, () => {
  guvercin.info(`Server listening on port ${port}.`);
});
