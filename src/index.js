/*Crea un proyecto, en este caso random de mensajes.
En la terminal se fija estar en el entorno de trabajo y crea carpeta del proyecto.
Se mueve a la carpeta e inicializa el proyecto: con git, luego con npm.
Completa todas las opciones de información sobre el proyecto. El entry point lo coloca en la carpeta “src/index.js” (después tiene que crear la carpeta y el archivo), la licencia es MIT, el autor ya queda seteado en la maquina del proyecto anterior.
Entra al archivo creado con el comando code, que abre visual studio code (al archivo package.json). Estando en Visual Studio Code crea la carpeta src y dentro el archivo index.js donde va a vivir el proyecto (en este caso el random de mensajes, como va a funcionar, como va a añadir la configuración dentro del package y como lo va a inicializar).
Crea la lógica del proyecto: un array de nombres y una función que mediante un random muestra en consola alguno de los nombres del array.
Para exportar la función que muestra los nombres utiliza:
module.exports = { nombreDeLaFuncion };
Crea una nueva carpeta que va a llamar bin. Ahí va a estar la configuración para que este paquete que estamos creando sea un paquete que se instala de forma global.
Dentro de la carpeta crea un archivo que se llama global.js
Dentro de este archivo, establece que es un elemento que se va a ejecutar dentro del sistema bash con esta primer linea
#!/usr/bin/env node
Genera una variable con el nombre random y le coloca un require, luego la ejecuta con la funcion que habiamos creado antes.
let random = require(’ …/src/index.js’ );
random.randomMsg(); //randomMsg es el nombre de la funcion que habiamos creado en el archivo index.js
De esta forma vamos a poder ejecutar este comando dentro de la terminal al escribir el nombre que hay que setear a continuacion.
En el archivo package.json creamos un apartado que llamamos bin y dentro creamos el nombre del comando y hacemos que llame al archivo global.js
tambien debemos configurar que este paquete sea de forma global. Para eso agregamos el siguiente valor
"preferGlobal": true
Entonces lo que agregamos en package.json quedaria asi:
“bin”: {
“random-msg”: “./bin/global.js”
},
“preferGlobal”: true*/

const messages = [
    "Laura",
    "Valentina",
    "Camilo",
    "Diego",
    "Karen",
    "Daniel"
];

const randomMsg = () => {
    const message = messages [Math.floor(Math.random()*messages.length)];
    console.log(message);
};

module.exports = {randomMsg}