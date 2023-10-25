const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

app.use(cookieSession({
    name:"Galleta",
    keys:["llave-1","llave-2"],

}))

app.get("/",(req,res)=>{
    req.session.visitas = req.session.visitas || 0;
    console.log(req.session.visitas);
    req.session.visitas = req.session.visitas + 1;



    res.send(`Hola, tu numero de visitas es ${req.session.visitas++}`)
})

app.listen("3000")