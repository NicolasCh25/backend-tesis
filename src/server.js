// Requerir módulos
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routerAdministrador from './routers/administrador_routes.js';

// Inicializaciones
const app = express();
dotenv.config();

// 🔐 Configuración CORS para producción
const allowedOrigins = [
  "http://localhost:5173",
  "https://front-tesis-production-79ff.up.railway.app"
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("❌ Bloqueado por CORS:", origin);
      callback(new Error("No permitido por CORS"));
    }
  },
  credentials: true
}));

// Middlewares 
app.use(express.json());

// Configuraciones 
app.set('port', process.env.PORT || 3000);

// Rutas 
app.get('/', (req, res) => res.send("Server on"));
app.use('/api', routerAdministrador);

// Manejo de una ruta que no sea encontrada
app.use((req, res) => res.status(404).send("Endpoint no encontrado - 404"));

// Exportar la instancia de express
export default app;
