import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000

import router from './routes/routes.js';
import setupMiddlewares from './middlewares/middlewares.js';

// Configuración de la carpeta estática y los middlewares
setupMiddlewares(app);

// Middleware para parsear solicitudes con formato JSON, configurado express
//no se puede trasladar a archivo de middlewares, es parte de express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
