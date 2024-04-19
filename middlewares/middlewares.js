import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import exphbs from 'express-handlebars';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function setupMiddlewares(app) {
// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, '..', 'assets'))); 
app.use(express.static(path.join(__dirname, '..', 'views'))); 
// Servir archivos estáticos de Bootstrap y jQuery
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // Bootstrap JavaScript
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // Bootstrap CSS
// Configuración de Handlebars
app.engine('.hbs', exphbs.engine({ // Establece Handlebars como el motor de vistas
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, '..', 'views/layouts'), // Ruta para los layouts
  partialsDir: [
    path.join(__dirname, '..', '/views/partials') // Ruta para los parciales
  ]  
}));
app.set('view engine', '.hbs'); // Establece Handlebars como el motor de vistas
app.set('views', path.join(__dirname, '..', 'views')); // Define la carpeta de vistas para las plantillas Handlebars
// Middleware de manejo de errores global
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).send('Ha ocurrido un error en el servidor');
  });   
}