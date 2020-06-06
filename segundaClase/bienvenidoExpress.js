/*

    Declaramos la constante app cuyo valor será el objeto express
    el cual contiene todas las funcionalidades que nosotros necesitamos
    para nuesro aplicativo funcione correctamente.

*/

const express = require('express');

const app = express(); // app para hacer referencia a una express application

/*

    Como express trabaja de la mano de los emtodos http (get,  post, put y delete)
    a partir de estos métodos, recibirá una petición del usuario y devolverá una respuesta.

    El método get() recibe dos parametros, el primero la ruta de acceso, el segundo la funcion
    que debe ejecutar. Esta función recibe a su vez dos parametros. Una petición y una respuesta.

    let ejecutar = (req, res)=>{}
    app.get('/', ejecutar)

*/

app.get('/', (peticion, respuesta) => {
    respuesta.send('Hola Express');
    //console.log(peticion);
});

app.get('/registro/:nombre', (peticion, respuesta) => {
    respuesta.send(`Bienvenido ${peticion.params.nombre}`);
    //Bienvenida Lorena
    console.log(peticion.params);
})

app.get('/informacion/:apellido&:edad', (peticion, respuesta) => {
    respuesta.send(`Su apellido es ${peticion.params.apellido} y su edad es ${peticion.params.edad} años`);
    //Bienvenida Lorena
    console.log(peticion.params);
})

/*
    API REST - Create Read Update Delete / Post, Get, Put, Delete
*/

app.get('/imagen', (peticion, respuesta) => {
    respuesta.sendFile(`${__dirname}/index.html`);
    console.log(__dirname);
})

app.listen(8080);
console.log('Conexion realizada :v');