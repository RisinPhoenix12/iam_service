import * as cors from 'cors';
import * as express from 'express';
import { errorHandler } from './handlers/error';
import { indexRouter } from './routes';
import { initializeServer } from './utils';

const app: express.Express = express();
const corsOptions: cors.CorsOptions = {
  origin: ['*'],
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(errorHandler);

/** Add all routes under /iam */
app.use('/iam', indexRouter);

app.get('/*', (req: express.Request, res: express.Response) => {
  res.redirect('/iam/ready');
});

initializeServer(app);

module.exports = app;
