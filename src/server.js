// Requerir módulos
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routerAdministrador from './routers/administrador_routes.js';

// Inicializaciones
const app = express();
dotenv.config();

// Middlewares 
app.use(express.json());
app.use(cors());

// Configuraciones 
app.set('port', process.env.PORT || 3000);

// Rutas 
app.get('/', (req, res) => res.send("Server on"));
app.use('/api', routerAdministrador);

// Manejo de una ruta que no sea encontrada
app.use((req, res) => res.status(404).send("Endpoint no encontrado - 404"));

// Exportar la instancia de express
export default app;
