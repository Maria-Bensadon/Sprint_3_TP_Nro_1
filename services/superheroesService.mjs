

/** 
  * Paso 4 = Capa de Servicio - Lógica de Negocio
  * Servicios de superHero
    _____________________________________________________________
 
  * Utiliza los métodos del repositorio (recuperar, buscar, 
    filtrar)
  
  * Esta capa es quien recibe la orden del controlador, y 
    se comunica con la capa de persistencia (Repositorios)
    para llamar a las funciones (interfaz), que buscaran 
    los datos en MongoDB (implementacion) utilizando el modelo
    (esquema y modelo).

*/

import superHeroRepository from "../repositories/SuperHeroRepository.mjs";

export async function obtenerSuperheroePorId(id) {

    return await superHeroRepository.obtenerPorId(id); 
    
}

export async function obtenerTodosLosSuperheroes() {

    return await superHeroRepository.obtenerTodos(); 
    
}

export async function buscarSuperheroePorAtributo(atributo, valor) {

    return await superHeroRepository.buscarPorAtributo(atributo, valor); 
}

export async function obtenerSupeheroesMayoresDe30() {

    return await superHeroRepository.obtenerMayoresDe30(); 
}


