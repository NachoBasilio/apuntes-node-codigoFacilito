const http = require('http');
const {add, substract, combineArrayWithSymnol} = require('./modules/math.js');

console.log("Hola")
console.log(add(1, 2));
console.log(substract(1, 2));
console.log(combineArrayWithSymnol([1, 2, 3, 4, 5]));
console.log(combineArrayWithSymnol([1, 2, 3, 4, 5], "x"));

const HOSTNAME = '127.0.0.1'
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', "html");
    res.end("<h1>Hola mundo</h1>");
})

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});