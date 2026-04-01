

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

    async obtenerPorId(id) {

    return await superHero.findById(id);
}

    async obtenerTodos(id) {

    return await superHero.find({});
} 

    async buscarPorAtributo(atributo, valor) {

    // Resolver 
}

    async obtenerMayoresDe30() {

    // RESOLVER
}
}

export default new superHeroRepository();

