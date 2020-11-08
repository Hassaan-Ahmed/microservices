import express, {Request, Response} from 'express';

const router = express.Router();

router.get('/api/users/current-user', (req: Request, res: Response) => {
    res.send({ hello: 'there' });
});

export {router as currentUserRouter}