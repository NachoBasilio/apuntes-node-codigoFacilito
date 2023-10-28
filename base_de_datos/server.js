const express = require('express')
const bodyParser = require('body-parser')
const sqlite3 = require('sqlite3')


const app = express()

app.use(bodyParser.urlencoded({ extended: true }))//Para que pueda leer los datos que vienen del formulario

let db = new sqlite3.Database("proyecto-backend")

//db.run("CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))"); Una vez creada la tabla no es necesario volver a crearla

app.post("/pendientes", function(req, res) {
    db.run(`INSERT INTO tasks(description) VALUES(?)`, req.body.description)
    res.send("Tarea creada")
})




app.listen(3000)

//Con esto podemos cerrar el servidor con ctrl + c
process.on("SIGINT", function(){
    console.log("Cerrando el servidor")
    db.close()
    process.exit()
})