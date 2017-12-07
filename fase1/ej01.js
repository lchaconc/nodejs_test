var http = require('http');
var url = require('url');
//Se crea un serivodr con los parámetros request y response
http.createServer(function (request, response) {
	//Cabecera de la respuesta con c´digo 200 y contenido texto plano
	response.writeHead(200, {'Content-Type':'text/plain' });
	//recibir los paramtesors de la url
	var params= url.parse(request.url, true).query;
	// se guarda el parametro nombre
	var nombre = params.nombre;
	//Se imprime en el navegador
	response.end('Hola ' + nombre);
}).listen(8000);
console.log("Servidor corriendo en el puerto 8000");
// en el navegador: http://localhost:8000/?nombre=Luis