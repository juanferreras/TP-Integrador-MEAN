var express = require('express');
var bodyParser = require('body-parser');
var rutaClientesAPI = require('rutas/cliente');
var rutaProyectosAPI = require('rutas/proyecto');

var app = express();

app.use(express.static(__dirname + '/public_html'));
app.use('/clientes', rutaClientesAPI);
app.use('/proyectos', rutaProyectosAPI);

app.listen(8080, function(){
  console.log("Express server listening en puerto 8080");
});