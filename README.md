# VIAJES_SIN_BARRERAS

[![Pruebas en travis](https://travis-ci.org/cr13/VIAJES_SIN_BARRERAS.svg?branch=master)](https://travis-ci.org/cr13/VIAJES_SIN_BARRERAS)

[![Heroku Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/cr13/VIAJES_SIN_BARRERAS)

[![Azure](http://azuredeploy.net/deploybutton.png)](http://maquinaavm-service-xuybo.cloudapp.net
)

## Servicios necesarios

- Dos servidores de base de datos,en uno almacenare todo lo referente a hoteles y en el otro almacenaré los usuarios registrados y sus correspondientes datos, mediante se vaya desarrollando se estudiara posibilidad de añadir más bases de datos.

- El despliegue se realizará en principio en Amazon Web Services, aunque puede cambiar si durante el desarrollo de la asignatura se encuentra uno con más ventajas.

[Descripción del proyecto](https://cr13.github.io/VIAJES_SIN_BARRERAS/)

## Integración continua

### Requisitos mínimos
    Node.js
    npm
    PostgreSQL
    MongoDB

### Instalación

    En el directorio ráiz del proyecto
    npm install
	 sudo service mongod start
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

Para ejecutar el [docker desde la imagen creada](https://hub.docker.com/r/cr13/viajes_sin_barreras/) en nuestro pc tenemos que:

    //Creamos el contenedor mongoDB
    sudo docker run -d --name mongoDB mongo
    //Descargamos la imagen y la instalamos
    sudo docker pull cr13/viajes_sin_barreras
    //Enlazamos y ejecutamos los dos contenedores
    sudo docker run --link=mongoDB:mongodb -it cr13/viajes_sin_barreras

Sino tenemos imagen también podemos hacer lo siguiente:

    1º Nos clonamos el repositorio
    2ª Ejecutamos el script
        sudo docker_local.sh

[Para más información ](https://cr13.github.io/VIAJES_SIN_BARRERAS/#hito-4)

##Diseño del soporte virtual para el despliegue de una aplicación

El despliegue de la aplicación en un IaaS lo voy hacer en Azure usando Vagrant para la creación de máquinas virtuales, y utilizando las playbook de Ansible para el provisionamiento de dichas máquinas virtuales y para el despligue vamos a utilizar Fabric.

### Configuración Azure

Suponiendo que ya estamos registrados en azure vamos a realizar los siguientes pasos:

    1- Descargamos e instalamos la ultima versión de [vagrant](https://releases.hashicorp.com/vagrant/1.9.1/vagrant_1.9.1_x86_64.deb) y también necesitaremos el [virtualbox](https://www.virtualbox.org/wiki/Downloads)

    2- Instalamos el provisionador azure para vagrant

        vagrant plugin install vagrant-azure --plugin-version '2.0.0.pre1'

    3- Instalamos azure

        npm install -g azure

    4- Ahora tenemos que loguearnos y conseguir la información de las credenciales de Azure [más info](https://docs.microsoft.com/en-us/azure/xplat-cli-connect)

        azure login

      Para descargar el archivo de configuración de publicación de su cuenta, asegúrese de que la CLI esté en el modo Gestión de servicios

        azure config mode asm --> activar modo gestión de servicios
        azure account download --> descargamos el archivo publishSettings

        //Importar el archivo publishSettings

        azure account import Evaluación\ gratuita-1-26-2017-credentials.publishsettings

    5- Generamos los certificados que se van a subir a Azure:

        openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout azurevagrant.key -out azurevagrant.key
        chmod 600 azurevagrant.key
        openssl x509 -inform pem -in azurevagrant.key -outform der -out azurevagrant.cer

      ![as](http://i1266.photobucket.com/albums/jj540/Juantan_Tonio/certificadosazure_zpsglhu8n8f.png)

    6- Subimos el archivo azurevagrant.cer a Azure [+info](https://docs.microsoft.com/es-es/azure/cloud-services/cloud-services-configure-ssl-certificate):

      - Inicie sesión en el [Portal de Azure clásico](http://manage.windowsazure.com/).
      - Configuración --> CERTIFICADOS DE ADMINISTRACIÓN --> cargar y elegimos el archivo azurevagrant.cer creado anteriomente

      ![subiendo cer](http://i1266.photobucket.com/albums/jj540/Juantan_Tonio/subirCERazure_zps9nxtocgn.png)

    7- Registro de la aplicación en Azure, para ello nos vamos al [portal de Azure](https://portal.azure.com/)

      - Menú --> Azure Active Directory --> en el menú del Directorio predeterminado --> Registros de aplicaciones -->Agregar --> completamos el formulario y pulsamos en crear

        ![registro nueva app](http://i1266.photobucket.com/albums/jj540/Juantan_Tonio/registronewapp_zpstnztcui6.png)

      - Una vez creada, clicamos en la aplicación y se nos abre una ventana de información ahí tenemos el Id. de aplicación(AZURE_CLIENT_ID). También se abre una ventana de configuración en la que vamos a crear los ACCESO DE API:
        - Generamos la clave (Ponemos una descripción --> fecha de expiración --> guardamos y copiamos la clave generada(AZURE_CLIENT_SECRET))
      - Id. de directorio (AZURE_TENANT_ID) Menú --> Azure Active Directory --> en el menú del Directorio predeterminado --> propiedades
      - Nos faltaría el id de subscripción(AZURE_SUBSCRIPTION_ID) que se obtiene con **login account list**
      - Todos estos [Ids](https://www.terraform.io/docs/providers/azurerm/) nos van ha servir para la creación de la MV en Azure.

    8- Le damos permisos a nuestra aplicación para que pueda crearse la máquina virtual desde Vagrant.

      - Menú --> Más servicios --> Suscripciones (elegimos nuestra suscripción) --> Control de acceso (IAM) --> Agregar (elegimos un rol y buscamos nuestra aplicación --> seleccionamos y aceptamos )

### Creación de la máquina virtual

Para la creación de la máquina virtual en Azure voy ha usar Vagrant y playbook-ansible. Para Vagrant se usa el archivo Vagrantfile y para ansible el archivo playbooks.yml.

* Primero vamos a crear el archivo [variables.yml](https://github.com/cr13/VIAJES_SIN_BARRERAS/blob/master/variables.yml) que contendra todas las variables con las que vamos a trabajar.

* Segundo creamos el [playbooks.yml](https://github.com/cr13/VIAJES_SIN_BARRERAS/blob/master/playbooks.yml) donde indicamos que provisione la máquina usando el playbook de ansible

* Tercero creamos el archivo [ansible.cfg](https://github.com/cr13/VIAJES_SIN_BARRERAS/blob/master/ansible.cfg) para evitar los errores que se pueden producir con cadenas demasiado largas que se usan durante el provisionamiento.

* Cuarto y último creamos el [Vagrantfile](https://github.com/cr13/VIAJES_SIN_BARRERAS/blob/master/Vagrantfile)

Una vez creado y configurados estos cuatro archivo ejecutamos:

    vagrant up --provider=azure

Para eliminar la máquina virtual:

    vagrant destroy

### Despligue

Aunque le hayamos especificado en el Vagrantfile el puerto HTTP (80) debe estar abierto, es posible que no lo esté.
Para solucionarlos nos vamos al [portal de Azure](https://portal.azure.com/), una vez en el portal:
  - Menú --> Máquinas virtuales
    - Pinchamos en el **Grupo de recursos** de la maquina a la que queremos abrir el puerto
    - Ahora en información general nos aparecen 6 elementos pinchamos en el que tiene tipo **Grupo de seguridad de red**
    - ulsamos en Reglas de seguridad de entrada --> Agregar --> rellenamos los campos y guardamos

Si queremos cambiar el nombre de dominio a nuestro proyecto tenemos:
  - Desde el [portal de Azure](https://portal.azure.com/)
  - Menú --> Máquinas virtuales
  - Pinchamos en el **Grupo de recursos** de la maquina a la que queremos cambiar el DNS
  - Ahora en información general nos aparecen 6 elementos pinchamos en el que tiene tipo **Dirección IP pública**
  - Vamos a Configuración --> Cambiamos Etiqueta de nombre DNS y guardamos

Para desplegar la aplicación vamos a usar Fabric

Para esto vamos a crear el archivo [fabfile.py](https://github.com/cr13/VIAJES_SIN_BARRERAS/blob/master/fabfile.py) que contiene diferentes funciones que serán las encargadas de realizar el proceso que deseamos remotamente.

Las posibles funciones que contiene el fichero son:

    install: para instalar forever.

    run_app: para ejecutar la aplicación

    run_test: para ejecutar test de la BD

    stop: para la ejecición de la aplicación

    restart: reinicia la ejecución de la aplicación

    pull: para actualizar el código de la aplicación.

Para usar Fabric es necesario instalarlo.

    sudo apt-get install fabric

Para usarlo simplemente utilizamos el comando:

    fab -p 'claveMV' -H vagrant@viajessinbarreras.westeurope.cloudapp.azure.com run_app

[Para más información ](https://cr13.github.io/VIAJES_SIN_BARRERAS/#hito-5)
