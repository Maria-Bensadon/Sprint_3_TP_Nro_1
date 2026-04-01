// archivo principal de la aplicacion

/** 
 * Paso 9 = Configuración del Servidor
   __________________________________________________________________
 
 * 
*/

import express from 'express'; 
import {connectDB} from './config/dbConfig.mjs';

// revisar esto ----------------------------------------
import superHeroRoutes from './routes/superHeroRoutes.mjs';  
// -----------------------------------------------------

const server = express(); 

// ???? -------------------------------------
const PORT = process.env.PORT || 3000; 
// -------------------------------------------

// Middleware para parsear JSON
server.use(express.json()); 

// configuracion de rutas
server.use('./api', superHeroRoutes); 

// Manejo de errores para rutas no encontradas
server.use((req, res) => {

    res.status(404).send({mensaje: `Ruta no encontrada`});
}); 

// iniciar el servidor
server.listen(PORT, () => {

    console.log(`Servidor escuchando en el puerto ${PORT}`); 
}); 

