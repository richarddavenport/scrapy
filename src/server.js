import polka from 'polka';
import {
  assetsMiddleware,
  kitMiddleware,
  prerenderedMiddleware
} from '../build/middlewares.js';

const app = polka();

app.all('*', assetsMiddleware, prerenderedMiddleware, kitMiddleware);

app.listen(process.env.PORT);
