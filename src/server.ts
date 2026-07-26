import app from './app';
import { type Request, type Response } from 'express';

//routers
import uploadRouter from './routes/uploadRoute';

const PORT = process.env.PORT || 3000;

//Default route
app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola, mundo!');
});

// Confifure the routes
app.use('/api/upload', uploadRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
}); 