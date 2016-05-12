var express = require('express');
var bodyParser = require('body-parser');
var rutaClientesAPI = require('rutas/cliente');
var rutaProyectosAPI = require('rutas/proyecto');
var rutaTareasAPI = require('rutas/tarea');

var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public_html'));
app.use('/clientes', rutaClientesAPI);
app.use('/proyectos', rutaProyectosAPI);
app.use('/tareas', rutaTareasAPI);

app.listen(port, function(){
  console.log("Express server listening en puerto 8080");
});