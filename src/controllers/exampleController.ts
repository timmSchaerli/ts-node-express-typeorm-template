import {Request, Response, Router} from 'express';
import {getXRules, validate} from '../validator';

const exampleController: Router = Router();

exampleController.get('', getXRules, validate,  (req: Request, res: Response) => {
    res.send('done')
})

export default exampleController
