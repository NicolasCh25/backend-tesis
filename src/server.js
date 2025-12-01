// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routerAdministrador from './routers/administrador_routes.js';

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());

// === CORS CONFIGURACIÓN (lista blanca) ===
// Ajusta allowedOrigins según necesites (producción + local)
const allowedOrigins = [
  'https://front-tesis-production.up.railway.app',
  'http://localhost:5173',
  'http://localhost:3000'
];

const corsOptions = {
  origin: (origin, callback) => {
    // permitir requests sin origin (curl, server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'), false);
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));



// --- Rutas ---
app.get('/', (req, res) => res.send('Server on'));

// Montar tu router en /api (tu router define /registro etc.)
app.use('/api', routerAdministrador);

// Manejo de rutas no encontradas
app.use((req, res) => res.status(404).send('Endpoint no encontrado - 404'));

// Puerto (no necesario llamar listen aquí si arrancas desde otro archivo)
app.set('port', process.env.PORT || 3000);

export default app;