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


## Hito 5

## Diseño del soporte virtual para el despliegue de una aplicación

El despliegue de la aplicación en un IaaS lo voy hacer en Azure usando Vagrant para la creación de máquinas virtuales, y utilizando las playbook de Ansible para el provisionamiento de dichas máquinas virtuales y para el despligue vamos a utilizar Fabric.

#### Configuración Azure

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

      - Una vez creada, clicamos en la aplicación y se nos abre una ventana de información ahí tenemos el Id. de aplicación(AZURE_CLIENT_ID) y el Id. de objeto (AZURE_TENANT_ID). También se abre una ventana de configuración en la que vamos a crear los ACCESO DE API:

        - Primero le damos permisos(Agregar --> elegimos nuestra api --> establecemos permisos y Listo)
        - Segundo y último generamos la clave (Ponemos una descripción --> fecha de expiración --> guardamos y copiamos la clave generada(AZURE_CLIENT_SECRET))

      - Todos estos [Ids](https://www.terraform.io/docs/providers/azurerm/) nos van ha servir para la creación de la MV en Azure.
      - Nos faltaría el id de subscripción(AZURE_SUBSCRIPTION_ID) que se obtiene con **login account list**

#### Creación de la máquina virtual

Para la creación de la máquina virtual en Azure voy ha usar Vagrant y playbook-ansible. Para Vagrant se usa el archivo Vagrantfile y para ansible el archivo playbooks.yml.

* Antes de nada vamos a crear el archivo variables.yml que contendra todas las variables con las que vamos a trabajar.

```yml

#Credenciales de azure (Estás son las que hemos ido copiando en el paso anterior)
# id del inquilino de azure, necesario para la creación de la MV
AZURE_TENANT_ID: XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX

# id de la cliente de azure, necesario para la creación de la MV
AZURE_CLIENT_ID: XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX

# clave secreta de azure, necesario para la creación de la MV
AZURE_CLIENT_SECRET: XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX

# id de la subscripción de azure, necesario para la creación de la MV
AZURE_SUBSCRIPTION_ID: XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX

# Datos de la máquina virtual que será creada

# Nombre de la MV
vm_name: nombre_maquina

# Contraseña de la MV
vm_password: *******

# Variable de entorno que indica que el entorno es de producción
EN_PROD: 1

# Variables para el despliegue
project_name: Nombre_del_proyecto
project_repo: Enlace_al_repositorio_github
project_path: Nombre_carpeta_almacenamiento_proyecto

# Dirección del servidor
server_name: "{{ vm_name }}.cloudapp.net www.{{ vm_name }}.cloudapp.net"

# Dependencias del sistema
system_packages:
  - git
  - nodejs
  - mongodb
  - npm
  - build-essential
  - libpq-dev
  - mocha

```
* Una vez hecho esto creamos el playbooks.yml donde indicamos que provisione la máquina usando el playbook de ansible:

```yml
---

- hosts: all
  remote_user: vagrant
  vars_files:
    - variables.yml
  gather_facts: no
  become: yes
  become_method: sudo
  tasks:
    - name: Instalar paquetes del sistema
      apt: pkg={{ item }} update-cache=yes cache_valid_time=3600
      with_items: "{{ system_packages }}"
    - name: Obtener aplicacion git
      git: repo={{ project_repo }}  dest={{ project_path }} clone=yes force=yes
    - name: Run npm install
      npm: path={{ project_path }}

```

* Creamos el archivo ansible.cfg para evitar los errores que se pueden producir con cadenas demasiado largas que se usan durante el provisionamiento.

```
[ssh_connection]
control_path = %(directory)s/%%h-%%p-%%r

```

* Por último creamos el Vagrantfile

```Vagrantfile
# -*- mode: ruby -*-
# vi: set ft=ruby :

require 'yaml'

current_dir    = File.dirname(File.expand_path(__FILE__))
configs        = YAML.load_file("#{current_dir}/variables.yml")

Vagrant.configure('2') do |config|
  config.vm.box = 'azure'
  config.vm.box_url = 'https://github.com/msopentech/vagrant-azure/raw/master/dummy.box' #Caja base vacía
  config.vm.network "private_network",ip: "192.168.50.4", virtualbox__intnet: "vboxnet0" #Ip privada
  config.vm.hostname = "localhost"
  config.vm.network "forwarded_port", guest: 80, host: 80

  config.vm.provider :azure do |azure, override|

    config.ssh.private_key_path = '~/.ssh/id_rsa'
    azure.vm_image_urn = 'canonical:UbuntuServer:16.04-LTS:16.04.201701130' #Imagen base del sistema
    azure.vm_size = 'Basic_A0' #Tamaño (recursos) de la MV
    azure.location = 'westeurope'
    azure.vm_name = configs['vm_name']
    azure.vm_password = configs['vm_password']
    azure.tcp_endpoints = '80:80'

    azure.tenant_id = configs['AZURE_TENANT_ID']
    azure.client_id = configs['AZURE_CLIENT_ID']
    azure.client_secret = configs['AZURE_CLIENT_SECRET']
    azure.subscription_id = configs['AZURE_SUBSCRIPTION_ID']

  end

  # Provisionar con ansible
  config.vm.provision "ansible" do |ansible|
    ansible.sudo = true
    ansible.playbook = "playbooks.yml"
    ansible.verbose = "-vvvv"
    ansible.host_key_checking = false
  end

end


```
Descripción del contenido

1. Cargamos el archivo variables.yml
2. Indicamos la box que debe usar, así com la red privada que tendrá, además de la redirección de puertos.
3. Indicamos los datos del usuario que quiere desplegar la aplicación, indicamos donde está el certificado, así como nuestro identificadores que extraimos anteriormente, la imagen de SO que queremos que use la máquina virtual y contraseña.
4. Método de provisionamiento.

Una vez creado y configurados estos cuatro archivo ejecutamos:

    vagrant up --provider=azure

Si creamos la máquina y modificamos el playbooks.yml podemos actualizar con:

    vagrant provision

Para conectar a nuestra máquina

    vagrant ssh

Para eliminar la máquina virtual:

    vagrant destroy

Resultados de la ejecución del vagrantfile:

  ![Imagen 1][1] Ejecución el playbook de ansible ![Imagen 2][2]

   [1]: http://i1266.photobucket.com/albums/jj540/Juantan_Tonio/creacionMV_zps90rsxz7m.png
   [2]: http://i1266.photobucket.com/albums/jj540/Juantan_Tonio/playbook-ansible_zpsbxy3a92l.png

#### Despligue

Para desplegar la aplicación vamos a usar Fabric

### Issues

[Hito 5](https://github.com/cr13/VIAJES_SIN_BARRERAS/issues/16)

### Ejercicios Temas 5 y 6

[Ejercicios tema 5](https://github.com/cr13/Ejercicios_IV/blob/master/tema5.md)

[Ejercicios tema 6](https://github.com/cr13/Ejercicios_IV/blob/master/tema6.md)
