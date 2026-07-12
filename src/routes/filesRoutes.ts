import express, { type Request, type Response } from 'express';

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
    
});

router.get('/', (req: Request, res: Response) => {
    res.send('¡Hola, mundo! desde filesRoutes');
});


export default router;