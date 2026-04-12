##### Diplomatura Universitaria en Desarrollo Web Full Stack con JavaScript
#### Módulo 3 - BackEnd con node.js

--- 

# Sprint 3 - Trabajo Práctico Nro 1

### Resumen
En este Trabajo Práctico, ampliamos la funcionalidad del servidor mediante la adicion de los siguientes endpoints: 

    - POST => esta ruta permite crear e insertar un nuevo superheroe en la base de datos, y 
    devolver el superheroe creado
    - PUT => este tipo de peticion sirve para actualizar un superheroe en la base de datos, 
    y devolver el superheroe modificado.
    - DELETE => Aqui, el request sirve para borrar un superheroe por ID en la base de datos. 
    La response, será el superheroe borrado
             => en este caso, se borrara un superheroe por NOMBRE, y la responde mostrara al mismo. 

<details> 
Desarrollamos un servidor que se conecta a la colección "NodeMod3Cohorte5" en la base de datos MongoDB. 
Usando el Modelo MVC (+ capa de servicios, repositorio, rutas, y configuracion del MongoDB) armamos el proyecto de forma que las diferentes actividades esten ordenadas y sean independientes, permitiendo mejorar su escalabilidad y mantenibilidad.
</details>

### Requerimientos
1. Levantar un servidor Express en el puerto 3005.
2. El servidor debe escuchar varias rutas GET:
    - /superheroes/id/:id: Recibe un ID de superhéroe y devuelve los datos de ese 
    superhéroe o un mensaje si no fue encontrado.
    - /superheroes/atributo/:atributo/:valor: Recibe un atributo (por ejemplo, 
    nombre o poder) y devuelve una lista de superhéroes que cumplen con ese criterio.
    - /superheroes/edad/mayorA30: Devuelve una lista de superhéroes mayores de 30 años
    que además sean del planeta Tierra y tengan al menos 2 poderes.


### Flujo
Mediante las rutas, el cliente accede a una peticion especifica o request consultando un recurso (método GET). Este request, vuelve al backend del servidor para gestionar el pedido y poder devolver una respuesta o response.
El controlador es quien recibe la solicitud y extrae los parametros de la ruta. A continuacion, se comunica con la capa de Servicios que sirve como intermediario con la capa de Repositorio. Dentro de esta ultima capa, tenemos una interfaz (donde declamos los métodos a utilizar), y una implementacion (donde definimos la logica de dichos metodos). Para que el repositorio obtenga los datos, debe conectarse con la capa de Modelo, que mediante el esquema (schema) y el modelo (modelo) obtiene el lugar y el tipo de dato que necesita buscar en la base de datos. 
Obtenido el o los dato/s, estos se devuelven al controlador quien utiliza funciones de la vista, que estructuran como va a ser visualizada la respuesta por el cliente o usuario. 


### Estructura del Trabajo Práctico

TP_3/
└── Sprint_2_Trabajo_Practico_Nro_3/
    ├── config/
    │   └── dbConfig.mjs             # Configuración y conexión a la base de datos (Paso 1)
    ├── controllers/
    │   └── superHeroControllers.mjs  # Gestión de solicitudes HTTP y respuestas (Paso 5)
    ├── models/
    │   └── superHero.mjs            # Definición del esquema de Mongoose (Paso 2)
    ├── node_modules/                # Dependencias instaladas (npm)
    ├── repositories/
    │   ├── IRepository.mjs          # Interfaz / Clase base para el repositorio
    │   └── superHeroRepository.mjs  # Lógica de acceso a datos (Paso 3)
    ├── routes/
    │   └── superHeroRoutes.mjs      # Definición de endpoints y rutas API (Paso 7)
    ├── services/
    │   └── superheroesService.mjs   # Lógica de negocio e intermediario (Paso 4)
    ├── views/
    │   └── responseView.mjs         # Formateo de salida de datos para el cliente (Paso 6)
    ├── .gitignore                   # Archivos y carpetas excluidos de Git
    ├── package-lock.json            # Historial exacto de versiones de dependencias
    ├── package.json                 # Configuración del proyecto y scripts
    ├── README.md                    # Documentación general del proyecto
    ├── server.mjs                   # Punto de entrada y arranque del servidor (Paso 9)
    └── Sprint 3 Documentacion V1.0.1.pdf  # Documentación






###### María Gabriela Centeno Bensadón
###### Año 2026
