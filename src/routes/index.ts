import * as express from 'express';
import { Router } from 'express';
import { readyService } from '../handlers';

const indexRouter: Router = express.Router({ mergeParams: true });

indexRouter.route('/ready').get(readyService);

export { indexRouter };
