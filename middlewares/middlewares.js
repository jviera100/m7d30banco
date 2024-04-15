import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function setupMiddlewares(app) {
// Middleware para archivos estáticos
    app.use(express.static(path.join(__dirname, '..', 'assets'))); 
    app.use(express.static(path.join(__dirname, '..', 'views')));  
// Middleware de manejo de errores global
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).send('Ha ocurrido un error en el servidor');
  });   
}