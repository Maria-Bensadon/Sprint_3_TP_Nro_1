

/** 
   * Paso 7 = Rutas API para superHero
     _________________________________________________

   *  
*/

import express from 'express';

import {
  actualizarSuperheroeController,
  buscarSuperheroesPorAtributoController, crearSuperheroeController,
  eliminarSuperheroePorIdController,
  eliminarSuperheroePorSuNombreController,
  obtenerSuperheroePorIdController, obtenerSuperheroesMayoresDe30Controller,
  obtenerTodosLosSuperheroesController
} from '../controllers/superHeroControllers.mjs';

const router = express.Router();

/** 
 * Endpoints GET
*/
// http://localhost:3000/api/heroes
router.get('/heroes', obtenerTodosLosSuperheroesController);

// // http://localhost:3000/api/heroes/mayores-30
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);

// // http://localhost:3000/api/heroes/:id
router.get('/heroes/:id', obtenerSuperheroePorIdController);

// // http://localhost:3000/api/heroes/buscar/:atributo/:valor
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);



// __________________________________________________________________________
//         SPRINT 3 - TRABAJO PRACTICO N°1
// __________________________________________________________________________

/** 
 * Endpoint POST
*/
// http://localhost:3000/api/heroes/crear-superheroe
router.post('/heroes/crear-superheroe', crearSuperheroeController);

/** 
 * Endpoint PUT
*/
// http://localhost:3000/api/heroes/:id
router.put('/heroes/:id', actualizarSuperheroeController);

/** 
 * Endpoints DELETE
*/

// http://localhost:3000/api/heroes/nombre/:valor
router.delete('/heroes/nombre/:valor', eliminarSuperheroePorSuNombreController);
// no es '/heroes/buscar/nombre/:valor' se superpondria con la ruta get de buscarPorAtributo
// 


// por id
// http://localhost:3000/api/heroes/:id
router.delete('/heroes/:id', eliminarSuperheroePorIdController);




export default router;


/*
[
  {
        "nombreSuperHeroe": "Spiderman",
        "nombreReal": "Peter Parker",
        "nombreSociedad": "Vigilante",
        "edad": 25,
        "planetaOrigen": "Tierra",
        "debilidad": "Radioactiva",
        "poder": ["Trepar paredes", "Sentido arácnido", "Super fuerza", "Agilidad"],
        "habilidadespecial": "Redes de telaraña",
        "aliado": ["Ironman"],
        "enemigo": ["Duende Verde"]
    },

    {
    "nombreSuperHeroe": "Bruja-Escarlata",
    "nombreReal": "Wanda Maximoff",
    "edad": 36,
    "planetaOrigen": "Tierra",
    "debilidad": "inestabilidad emocional",
    "poderes": ["manipulación de probabilidades", "telequinesis", "telepatía", "vuelo"], 
    "aliados": ["Vision", "Quicksilver", "Vengadores"],
    "enemigos": ["Ultrón", "Thanos", "Agatha Harkness"],
    "creador": "Stan Lee"
  },

  {
    "nombreSuperHeroe: "Moon-Knight",
    "nombreReal: "Marc Spector",
    "edad: 40,
    "planetaOrigen: "Tierra",
    "debilidad: "inestabilidad mental", // o "TID"
    "poderes: ["Resistencia física", "fuerza superior", "inmortalidad condicionada"], 
    "aliados: ["Konshu", "Jean-Paul Duchamp"],
    "enemigos: ["Black Spectre", "Arthur Harrow"],
    "creador: "Don Perlin"

  },
  
  {
    "nombreSuperHeroe": "Daredevil",
    "nombreReal": "Matt Murdock",
    "edad": 40,
    "planetaOrigen": "Tierra",
    "debilidad": "Sobrecarga Sensorial",
    "poderes": ["Sentidos Aumentados", "Sentido Radar"], 
    "aliados": ["Karen Page", "Foggy Nelson", "White Tiger", "Punisher" ],
    "enemigos": ["Kingpin", "Bullseye"],
    "creador": "Stan Lee"

  }
]
  
*/