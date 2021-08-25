import {Router} from 'express';
import exampleRouter from './controllers/exampleController';
const router: Router = Router();

router.use('/example', exampleRouter);

export default router;

