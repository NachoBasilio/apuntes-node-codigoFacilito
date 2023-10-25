const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))//para que pueda leer los datos que vienen en le body de la petición

app.get("/saludo", function(req, res) {
    res.send(`Hola ${req.query.name}!`)
})

app.post("/",function(req, res) {
    res.send(`Hola ${req.body.name}!`)
})

app.listen(3000)