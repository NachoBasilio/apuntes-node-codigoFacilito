const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use("/assets",express.static("assets",{
    etag: false,
    maxAge: "5h"//Esto es para que no se guarde en cache y se actualice cada 5 horas
}))

app.get("/", function(req, res) {
    res.render("index")
})

app.listen(3000)