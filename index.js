import express from 'express';
const app = express();
import cors from 'cors'; //permite que las solicitudes sean enviadas desde un dominio diferente
import bodyParser from 'body-parser'; //analiza cuerpo de solicitudes https
import chalk from 'chalk';

import router from './routes/routes.js';
import setupMiddlewares from './middlewares/middlewares.js';

const PORT = process.env.PORT || 3000

// Configuración de la carpeta estática y los middlewares
setupMiddlewares(app);

// Middleware para parsear solicitudes con formato JSON, configurado express
//no se puede trasladar a archivo de middlewares, es parte de express
app.use(express.json()); //analiza solicitudes en formato JSON
app.use(express.urlencoded({ extended: false })); //analiza solicitudes en formato URL
app.use(router);
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => { 
  console.log(chalk.underline.bgCyanBright.magenta.bold.italic(`🔥🔥🔥🔥🔥Servidor corriendo en el puerto🔥🔥🔥🔥🔥http://localhost:${PORT}`));
});
