import express, { type Request, type Response } from 'express';
import { upload } from '../middlewares/fileUploadMiddleware';   

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('¡Hola, mundo! desde filesRoutes');
});

router.post('/', upload.single('myFile'), (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).send('No se ha subido ningún archivo.');
  }
  res.send(`Archivo subido exitosamente: ${req.file.filename}`);
});


export default router;