

/** 
 * Paso 3 - b) = Capa de persistencia
 * Implementacion CRUD de SuperHero
   ________________________________________________________________
 * Implementa los metodos definidos por la interfaz. 
   Si por ejemplo, se llama al metodo obtenerPorId(), esta 
   interactua en directo con MongoDB a traves de Mongoose
   para buscar el superheroe correspondiente al id dado. 
 
 * 
*/

// consultar esta linea

// ---------------------------------------------
import superHero from "../models/superHero.mjs";
import IRepository from "./IRepository.mjs";


class superHeroRepository extends IRepository {

  // ---------------- Metodo GET --------------------------
  // metodo para obtener superheroes por id
  async obtenerPorId(id) {

    return await superHero.findById(id);
  }

  // metodo para obtener todos los superheroes
  async obtenerTodos(id) {

    return await superHero.find({});
  }

  // metodo para buscar superheroes por atributo
  async buscarPorAtributo(atributo, valor) {

    /**
     * Propiedad Computada: se refiere a la posibilidad de tener nombres de propiedades de objetos 
       cuyos nombres se pueden determinar en tiempo de ejecución. 
       Por ejemplo: 
       - let nombrePropiedadDinamica = "nombre";
       - let objeto = { [nombrePropiedadDinamica]: "Pepito Grillo"}
 
     */
    const consulta = { [atributo]: valor };
    return await superHero.find(consulta);
  }

  // metodo para obtener los superheroes mayores a 30
  async obtenerMayoresDe30() {

    /**
       defino el metodo para obtener todos los supers y lo guardo 
       en una constante. 
       El await va en el primer metodo, porque si no 
       obtengo todos los superheroes, no puedo filtrarlos.

    */
    const todosSuperheroes = await superHero.find({});

    return todosSuperheroes.filter(hero => hero.edad > 30);

  }

  // ------------------------------------------------------

  // ---------------- Metodo POST --------------------------

  async crearHeroe() {

    const datosHeroe = req.body;
    return await superHero.create(datosHeroe);

  }

  // ------------------------------------------------------

  // ---------------- Metodo PUT --------------------------

  async actualizarHeroe(id) {

    const datosActualizados = req.body;

    return await superHero.findByIdAndUpdate(datosActualizados);

  }

  // ------------------------------------------------------

  // ---------------- Metodo DELETE -----------------------

  // metodo para eliminar un superheroe por id
  async eliminarHeroe(id) {
    return await superHero.findByIdAndDelete(id);
  }


  // metodo para eliminar un superheroe por nombre
  async eliminarHeroePorNombre(nombreSuperHeroe, valor) {

    const nombreHeroe = {[nombreSuperHeroe]: valor};
    const encontrado = superHero.find(nombreHeroe); 
    return await superHero.deleteOne(encontrado); 
  }

  // ------------------------------------------------------


}

export default new superHeroRepository();










// ----------------------------------------------------------------

// Errores
/**
    const encontrarSuperheroes = IRepository.obtenerTodos(); 
    superHero.filter(hero => hero.edad > 30 );

    const encontrarSuperheroe = superHero.obtenerTodos(); 
    superHero.filter(hero => hero.edad > 30 );

   * no se puede porque justamente estoy armando la logica, 
    por tanto no puedo implementar el metodo
    _____________________________________________
 
    superHero.filter(hero => hero.edad > 30 );
    ------------------------------------------
    ("error":"superHero.filter is not a function") 
    
    * significa que filter se utiliza para arrays. Y superHero no
    es un array. 
  --------------------------------------------
*/
