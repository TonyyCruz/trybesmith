import express from 'express';
import routes from './routes';
import errorMiddleware from './middleware/error';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use(routes);

app.use(errorMiddleware);

export default app;
