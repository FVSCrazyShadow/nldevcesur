#############################################################################################

Este archivo README proporciona instrucciones paso a paso para clonar un repositorio de GitHub, instalar Node.js y Angular CLI, inicializar un proyecto de Angular, desplegar un proyecto de Angular en entorno de desarrollo y cómo utilizar el comando ng serve -o.

1. Clonar un Repositorio de GitHub

URL GIT: https://github.com/FVSCrazyShadow/nldevcesur.git

##### Instrucciones de uso #####

1.) Crear un directorio nuevo donde vamos a clonar el repositorio.

2.) Abrir el CMD en el nuevo directorio. Para abrir la CMD tenemos varias opciones:
	
	2.1) Ir al menú de inicio, hacer clic en "ejecutar". Escribimos a continuación CMD y pulsamos en ejecutar. Una vez abierta el CMD, introducimos cd "RutaAbsolutaNuevoDirectorio"
	
	2.2) En la parte superior del gestor de archivos, en el buscador de rutas, podemos escribir CMD y pulsar intro. Se nos abrirá el CMD en el directorio donde nos encontremos.

3.)Ejecutar el comando git clone https://github.com/FVSCrazyShadow/nldevcesur.git

#### Intrucciones de despliegue en localhost ####

1.) Una vez clonado el repositorio, se nos creará un nuevo directorio llamado "nldev", entramos en él.

2.) En la raíz del directorio, encontraremos un fichero README.md con las indicaciones de despligue.


https://git-scm.com/

#### Instalar Node.js y Angular CLI ####

Antes de iniciar un proyecto de Angular, es necesario tener Node.js y Angular CLI instalados. Puedes descargar e instalar Node.js desde https://nodejs.org/.

Una vez que Node.js esté instalado, puedes instalar Angular CLI usando el siguiente comando:
npm install -g @angular/cli


#### Inicializar un Proyecto de Angular ####

Después de instalar Angular CLI, puedes inicializar un nuevo proyecto de Angular con el siguiente comando:

- ng new nombre-proyecto

Sigue las instrucciones en la terminal para configurar las opciones del proyecto.

#### Desplegar en Desarrollo un Proyecto de Angular ####
Para desplegar un proyecto de Angular en entorno de desarrollo, navega al directorio del proyecto y ejecuta el siguiente comando:

- ng serve

Esto iniciará el servidor de desarrollo y podrás acceder a tu aplicación en http://localhost:4200/ por defecto.

#### Uso del Comando ng serve -o ####

El comando ng serve -o no solo inicia el servidor de desarrollo, sino que también abre automáticamente la aplicación en tu navegador predeterminado. Puedes utilizarlo de la siguiente manera:

- ng serve -o

Este comando acelera el proceso de desarrollo al abrir la aplicación en el navegador de inmediato, lo que facilita la visualización de los cambios realizados en el código.


#### Aplicación desplegada en servidor Europeo ####

- Netlify:

https://658087c6e9642c7ab29d7243--effervescent-profiterole-f58dc6.netlify.app/index
