const express = require('express')
const bodyParser = require('body-parser')
const sqlite3 = require('sqlite3')
const Sequelize = require('sequelize')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))//Para que pueda leer los datos que vienen del formulario

const sequelize = new Sequelize("proyecto-backend", null, null, {
    dialect: "sqlite",
    storage: "./proyecto-backend"
}) 

//db.run("CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))"); Una vez creada la tabla no es necesario volver a crearla

app.post("/pendientes", function(req, res) {
   // db.run(`INSERT INTO tasks(description) VALUES(?)`, req.body.description)
    res.send("Tarea creada")
})




app.listen(3000)

