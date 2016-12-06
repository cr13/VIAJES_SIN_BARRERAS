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

## Docker
