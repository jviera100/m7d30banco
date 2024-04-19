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
app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));// extension => Define el motor de plantillas con la extensión .hbs
app.set("view engine", ".hbs");// app => Establece Handlebars como el motor de vistas
app.set("views", "./views");// carpeta vista => Define la carpeta de vistas para las plantillas Handlebars
// Middleware de manejo de errores global
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).send('Ha ocurrido un error en el servidor');
  });   
}