# VIAJES_SIN_BARRERAS

[![Pruebas en travis](https://travis-ci.org/cr13/VIAJES_SIN_BARRERAS.svg?branch=master)](https://travis-ci.org/cr13/VIAJES_SIN_BARRERAS)

[![Heroku Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/cr13/VIAJES_SIN_BARRERAS)

## Servicios necesarios

- Dos servidores de base de datos,en uno almacenare todo lo referente a hoteles y en el otro almacenaré los usuarios registrados y sus correspondientes datos, mediante se vaya desarrollando se estudiara posibilidad de añadir más bases de datos.

- El despliegue se realizará en principio en Amazon Web Services, aunque puede cambiar si durante el desarrollo de la asignatura se encuentra uno con más ventajas.

[Descripción del proyecto](https://cr13.github.io/VIAJES_SIN_BARRERAS/)

## Integración continua

### Requisitos mínimos
    Node.js
    npm
    MySQL server
    MongoDB

### Instalación

    En el directorio ráiz del proyecto
    npm install
    npm start

### Test

    npm test

### Documentación

[Integración continua](https://cr13.github.io/VIAJES_SIN_BARRERAS/#hito-2)

## Despliegue de una aplicación en un PaaS

He utilizado heroku, lo he elegido ya que he aprendido a utilizarlo con los ejercicios del tema 3 y me resultó sencillo de usar.

### Fichero necesario para el despliegue

Para un mayor control y flexibilidad sobre su aplicación se recomienda la creación del fichero Procfile que ha de estar alojado en el directorio ráiz de la aplicación. Heroku usa el Procfile para saber que tiene que ejecutar. En nuestro caso contendrá:

    +web: node app.js

### Instalación

    # Descarga e instalación de Heroku
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

[Para más información ](https://cr13.github.io/VIAJES_SIN_BARRERAS/#hito-3)

[Página en heroku](https://viajessinbarreras.herokuapp.com/)


##Contenedores para pruebas: Docker

Para el entorno de pruebas se ha utilizado Docker el cual está basado en un sistema de contenedores. Para su uso, he creado dos contenedores uno para el servidor de Node.js y otro para MongoDB. He enlazado los contenedores con el parámetro --link.

### Fichero necesario Dockerfile que contendrá lo siguiente:

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


### Docker

Para ejecutar el docker desde la imagen creada en nuestro pc tenemos que:

    //Creamos el contenedor mongoDB
    sudo docker run -d --name mongoDB mongo
    //[Descargamos la imagen](https://hub.docker.com/r/cr13/viajes_sin_barreras/) y la instalamos
    sudo docker pull cr13/viajes_sin_barreras
    //Enlazamos y ejecutamos los dos contenedores
    sudo docker run --link=mongoDB:mongodb -it cr13/viajes_sin_barreras

Sino tenemos imagen también podemos hacer lo siguiente:

    1º Nos clonamos el repositorio
    2ª Ejecutamos el script docker_local.sh

[Para más información ](https://cr13.github.io/VIAJES_SIN_BARRERAS/#hito-4)
