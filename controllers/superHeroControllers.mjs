

/** 
 * Paso 5 = Controlador
   _______________________________________________________

 * Gestiona las solicitudes HTTP. 

 * Se comunica con el servicio, para revisar la lógica de negocio
  Por ejemplo: si en el servidor, el cliente ingresa un id para 
  buscar un superheroe, el servicio es el intermediario entre el 
  controlador y el repositorio (y el modelo)
 
 * La ruta envía el/los dato/s (id, atributo y/o valor, todos los superheroes, 
  los mayores de 30 años) al controlador. 
  El controlador utiliza las funciones importadas del servicio, para 
  comunicarse con el repositorio y obtener la informacion. 
  - Si todo sale bien (codigo 200 OK), se utilizan las funciones de la vista para
  "formatear" o mostrar el/los superheroe/s. 
  - Si sale mal: 
       - error (codigo 404) => no se encontro el superheroe o los superheroes
       - error (codigo 500) => hay un problema que no esta especificado, y puede 
      venir del codigo, de la DB, o de la configuracion

  * El try ... catch es un bloque de instrucciones a intentar (try), que 
   tiene especificado una respuesta si se produce una excepcion (catch). 
      - try => codigo 200 y codigo 404
      - catch => codigo 500

*/

import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes, obtenerSupeheroesMayoresDe30, buscarSuperheroePorAtributo } from "../services/superheroesService.mjs";

// la vista se realiza en el paso 6
import {renderizarListaSuperheroes, renderizarSuperheroe} from "../views/responseView.mjs"

// 1) OBTENER SUPERHEROES POR ID
export async function obtenerSuperheroePorIdController(req, res) {

  try {

    const id = req.params.id;
    const superheroe = await obtenerSuperheroePorId(id);

    if (!superheroe) {

      /** 
        
        El error 404 ("Not Found") es un código de estado HTTP que indica 
        que el navegador pudo conectarse al servidor, pero no encontró la 
        página o recurso solicitado.

      */
      return res.status(404).send({ mensaje: `Superhéroe no encontrado` });
    }

    // utiliza una funcion de la capa vista
    const superheroeFormateado = renderizarSuperheroe(superheroe);
    // la respuesta esta en funcion del status. si es OK, se muestra el superheroe
    res.status(200).json(superheroeFormateado);

  }

  catch (error) {

    /** 
      
      El error 500 (Internal Server Error) es un código de estado HTTP que indica
      que el servidor web ha encontrado una condición inesperada que le impide 
      cumplir con la solicitud del usuario.

      No se puede especificar cuál es el problema exacto. Puede ser un fallo en 
      el código, en la configuración o en la base de datos del sitio web.

    */
    res.status(500).send({ mensaje: `Error al obtener el superhéroe`, error: error.message });

  }

}


// 2) OBTENER TODOS LOS SUPERHEROES
export async function obtenerTodosLosSuperheroesController(req, res) {

  try {

    const superheroes = await obtenerTodosLosSuperheroes();

    const superheroesFormateados = renderizarListaSuperheroes(superheroes);
    res.status(200).json(superheroesFormateados);

  }

  catch (error) {
    // la respuesta esta en funcion del status, aqui es el codigo error 500
    res.status(500).send({ mensaje: `Error al obtener los superhéroes`, error: error.message });
  }

}



// 3) BUSCAR SUPERHEROES POR ATRIBUTO
export async function buscarSuperheroesPorAtributoController(req, res) {

  try {

    /* 

      destructuring = se extraen propiedades de objetos, en este caso, cada 
      superheroe en la base de datos, que posee como esquema a la 
      clase superHeroSchema en la capa de modelo

    */
    const { atributo, valor } = req.params;

    const superheroes = await buscarSuperheroePorAtributo(atributo, valor);

    if (superheroes.length === 0) {

      return res.status(404).send({ mensaje: `No se encontraron superheroes con ese atributo` });
    }

    const superheroesFormateados = renderizarListaSuperheroes(superheroes);

    res.status(200).json(superheroesFormateados);
  }

  catch (error) {

    res.status(500).send({ mensaje: `Error al buscar los superhéroes`, error: error.message });
  }

}


// 4) OBTENER SUPERHEROES MAYORES DE 30 AÑOS
export async function obtenerSuperheroesMayoresDe30Controller(req, res) {

  try {

    const superheroes = await obtenerSupeheroesMayoresDe30();

    // la longitud del string superheroes debe ser mayor a 0
    if (superheroes.length === 0) {

      /* 
        la respuesta esta en funcion del status. En este caso, si no hay superheroes
        mayores a 30, se muestra el mensaje dado
      */
      res.status(404).send({ mensaje: `No se encontraron superhéroes mayores de 30 años` });

    }

    // si hay un superheroe que mostrar, se utiliza la funcion de la capa de vista
    const superheroesFormateados = renderizarListaSuperheroes(superheroes);
    res.status(200).json(superheroesFormateados);

  }

  catch (error) {

    res.status(500).send({ mensaje: `Error al obtener superhéroes mayores de 30, controlador`, error: error.message });

  }
}


