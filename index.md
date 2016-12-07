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

### Fichero necesario para el despliegue

Para un mayor control y flexibilidad sobre su aplicación se recomienda la creación del fichero Procfile que ha de estar alojado en el directorio ráiz de la aplicación.
Heroku usa el Procfile para saber que tiene que ejecutar. En nuestro caso contendrá:

    +web: node app.js

## Instalación de Heroku, configuración y sincronización con GitHub y Travis-CI

### Descarga e instalación de Heroku

    #Instación de Heroku
    sudo apt-get install wget
    wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
    # Nos logueamos en Heroku
      heroku login
    # Creamos la aplicación, ponemos la región europea y el nombre que le vamos a asignar a nuestra app.
      heroku apps:create --region eu viajessinbarreras
    # Creamos una base de datos mongodb
      heroku addons:create mongolab:sandbox
    # Generamos clave para poder subir nuestros archivos a heroku
      heroku auth:token //clave
    # Subida de archivos a heroku
      git push heroku master //nos pedirá usuario(Podemos dejarlo vacio) y la clave que acabamos de generar

    //Si ya tenemos el repositorio creado
      heroku git:remote -a viajessinbarreras
      git push heroku master
    # Ajustamos el tipo de procesos ajustando el número de dinamómetros web a 1
      heroku ps:scale web=1
    # Para ver nuestra aplicación en el navegador
      heroku open
    # Para ver los posible errores que se puedan dar.
      heroku logs --tail

### Para sincronizar GitHub, Travis-CI y Heroku.

Desde la aplicación creada en Heroku, pestaña deploy.

![sincronizar](http://i1266.photobucket.com/albums/jj540/Juantan_Tonio/sincronizar_zps8ge9kb9l.png)

[Heroku enlace a web en construcción](https://viajessinbarreras.herokuapp.com/)

## Ejercicios Tema 3

[Ejercicios](https://github.com/cr13/Ejercicios_IV/blob/master/tema3.md)

## Hito 4

##Contenedores para pruebas: Docker

Para el entorno de pruebas se ha utilizado Docker el cual está basado en un sistema de contenedores. Para su uso, he creado dos contenedores uno para el servidor de Node.js y otro para MongoDB. He enlazado los contenedores con el parámetro --link.

Para empezar debemos registrarnos en [dockerHub](https://hub.docker.com/) y vincular con nuestra cuenta de github.

![Vinculamoscuentagithub](http://i1266.photobucket.com/albums/jj540/Juantan_Tonio/vinculargitdocker_zpsv0tfl2p1.png)

Pulsamos en **Create Automated Build** y seleccionamos el repositorio de nuestro proyecto, escribimos una descripción y pulsamos en create.
Una vez creado vamos a sincronizarlo para que con cada push se actualice, para ello nos vamos a  Building Settings y pulsamos el botón Trigger.

### Fichero necesarios

**Dockerfile que contendrá lo siguiente:**

    # Tells the Docker which base image to start.
    FROM node:latest

    # Adds files from the host file system into the Docker container.
    ADD . /models
    ADD . /routes

    # Sets the current working directory for subsequent instructions
    WORKDIR /models
    WORKDIR /routes

    RUN npm install

    #expose a port to allow external access
    EXPOSE 8080

    # Start application
    CMD ["npm", "start"]

**.dockerignore**

    node_modules
    bower_components
    .tmp
    .env


### Docker

Para ejecutar el docker desde la imagen creada en nuestro pc tenemos que:

    //Creamos el contenedor mongoDB
    sudo docker run -d --name mongoDB mongo
    //[Descargamos la imagen](https://hub.docker.com/r/cr13/viajes_sin_barreras/) y la instalamos
    sudo docker pull cr13/viajes_sin_barreras
    //Enlazamos y ejecutamos los dos contenedores
    sudo docker run --link=mongoDB:mongodb -it cr13/viajes_sin_barreras

![Funcionamiento](http://i1266.photobucket.com/albums/jj540/Juantan_Tonio/dockerimage_zpson6t6cmn.png)

Sino tenemos imagen también podemos hacer lo siguiente:

    1º Nos clonamos el repositorio
    2ª Ejecutamos el script
        sudo docker_local.sh

![Funcionamiento](http://i1266.photobucket.com/albums/jj540/Juantan_Tonio/dockerlocal_zpszhswicfc.png)

### Issues

[Hito 4](https://github.com/cr13/VIAJES_SIN_BARRERAS/issues/15)

### Ejercicios Tema 4

[Ejercicios](https://github.com/cr13/Ejercicios_IV/blob/master/tema4.md)
