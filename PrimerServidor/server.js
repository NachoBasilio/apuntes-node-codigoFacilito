const http = require('http');

function responderPeticion(request, response) {//Esta funcion se ejecuta cada vez que se hace una peticion
    response.end("Hola Mundo")
}

const server = http.createServer(responderPeticion)

server.listen(3000)