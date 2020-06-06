/* 
    En nodeJS existen alrededor de 34 modulos propios. 
    Estos modulos nos permiten acceder a ciertas funcionalidades que Node nos provee
    tales como crear nuestro propio servidor , leer archivos , identificar rutas, eventos, entre otros. 

    Uno de los modulos que conoceremos se llama http
    que nos permite crear nuestro propio server que interprete javascript del 
    lado del servidor y renderice una vista en el navegador.

*/

const http = require('http'); //En una constante requerimos y guardamos el módulo que necesitamos

/*
    Definir la peticion y la respuesta que nos permita conectar al servidor 
    que crearemos. Pasaremos en una funcion de dos parametros que seran request, response
*/

let controlador = (peticion, respuesta) => {
    /*
    function(peticion,respuesta){
        document.write('Bienvenidos a NodeJS);
    }

    con el metodo end finalizamos la conexion al servidor para evitar ataques
    */

    respuesta.end('Bienvenidos a NodeJS');
};



let = servidor = http.createServer(controlador);

servidor.listen(8080); //8080,8000,3000

/*
    let servidor = http.createServer((peticion,respuesta)=>{
        respuesta.end("Bienvenido NodeJS")
    }).listen(8080);
*/

console.log('conectado :v');