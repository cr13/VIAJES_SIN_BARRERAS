---
layout: index
---

## Hito 1

## Proyecto elegido

Sitio web VIAJES SIN BARRERAS

### Descripción

Turismo adaptado para personas con movilidad reducida, discapacitadas que tengan problemas de accesibilidad, que se muevan en sillas de ruedas.

- Debe aparecer toda la información relativa al hotel, ubicación, y las habitaciones que tiene disponible para minusválidos.

- Organizar las busquedas por comunidades autónomas y provincias, número de personas, fecha de entrada salida, etc.

- Para realizar la compra de una estancia los usuarios deberán estar registrado. Cada usuario podrá ver sus compras realizadas.

#### Servicios necesarios

- Dos servidores de base de datos,en uno almacenare todo lo referente a hoteles y en el otro almacenaré los usuarios registrados y sus correspondientes datos, mediante se vaya desarrollando se estudiara posibilidad de añadir más bases de datos.

- El despliegue se realizará en principio en Amazon Web Services, aunque puede cambiar si durante el desarrollo de la asignatura se encuentra uno con más ventajas.

#### Posible colaborador

Un bot en Python que me devuelva todos los hoteles posibles según los requisitos marcados por el usuario.

## Hito 2

## Sistemas de Integración Continua

Como sistema de integración continua he elegido Travis-CI, ya que es él que se mencionó y recomendó el profesor en clase.    
Por lo tanto he añadido el archivo de configuración .travis.yml a mi repositorio.

### Test

Para la realización de los tests he usado mocha y chai, que realizan una serie de peticiones (POST, GET, PUT y DELETE) a la API

Los tests se ejecutan con el comando

    npm test

### Instalación
  - En el directorio ráiz del proyecto
  - npm install
  - npm start

### Requisitos mínimos
  - [Node.js](https://nodejs.org/en/)
  - [npm](https://docs.npmjs.com/getting-started/installing-node)
  - [MySQL server](https://help.ubuntu.com/lts/serverguide/mysql.html)
  - [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

## Ejercicios Tema 2

[Ejercicios](https://github.com/cr13/Ejercicios_IV/blob/master/tema2.md)

## Hito 3

## Despliegue de una aplicación en un PaaS

He utilizado heroku, lo he elegido ya que he aprendido a utilizarlo con los ejercicios del tema 3 y me resultó sencillo de usar.

### Instalación de Heroku, configuración y sincronización con GitHub y Travis-CI

    sudo apt-get install wget
    wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
    sudo heroku login
    sudo heroku apps:create --region eu viajessinbarreras
    sudo heroku addons:create mongolab:sandbox
    sudo heroku auth:token //clave
    git push heroku master //nos pedirá usuario(Podemos dejarlo vacio) y la clave que acabamos de generar

    //Si ya tenemos el repositorio creado
      sudo heroku git:remote -a viajessinbarreras
      git push heroku master

    sudo heroku ps:scale web=1
    sudo heroku open
    sudo heroku logs --tail

Para sincronizar GitHub, Travis-CI y Heroku, desde la aplicación creada en Heroku, pestaña deploy.

![sincronizar](http://i1266.photobucket.com/albums/jj540/Juantan_Tonio/sincronizar_zps8ge9kb9l.png)

[Heroku enlace a web en construcción](https://viajessinbarreras.herokuapp.com/)

## Ejercicios Tema 3

[Ejercicios](https://github.com/cr13/Ejercicios_IV/blob/master/tema3.md)
