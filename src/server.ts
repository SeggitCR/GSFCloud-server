import app from './app';
import { type Request, type Response } from 'express';

//routers
import filesRouter from './routes/filesRoutes';

const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola, mundo!');
});

app.use('/api/files', filesRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});