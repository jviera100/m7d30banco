import express from 'express';
import cors from 'cors'; //permite solicitudes desde otro dominio
import chalk from 'chalk';
import router from './routes/routes.js';
import setupMiddlewares from './middlewares/middlewares.js';
import db from './config/db.js';

const app = express();
const PORT = process.env.PORT || 3000

// Configuración de la carpeta estática y los middlewares
setupMiddlewares(app);
// Middleware para analizar solicitudes en formato JSON (reemplaza a body-parser)
app.use(express.json()); 
// Middleware para analizar solicitudes en formato URL (reemplaza a body-parser)
app.use(express.urlencoded({ extended: false })); 
// Middleware permite solicitudes desde otro dominio
app.use(cors());

app.use(router);

// Sincronizar modelos con la base de datos
// db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
      console.log(chalk.underline.bgCyanBright.magenta.bold.italic(`🔥🔥🔥🔥🔥Servidor corriendo en el puerto🔥🔥🔥🔥🔥http://localhost:${PORT}`));
  });
// }).catch(error => {
//   console.error('Error al sincronizar modelos:', error);
// });
//no utilize sequelize porque daba error y en index.js y db.js comente los codigos de sequelize