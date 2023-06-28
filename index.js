var express=require("express");   //trababajamos con la carpeta usuarios
var path=require("path");
var session=require("express-session");
var usuariosRutas=require("./rutas/usuarios");
const { Session } = require("inspector");
require("dotenv").config();

//const { restart } = require("nodemon");

var app=express();     //trabajamos con la carpeta views, templates , encabezado
app.set("view engine", "ejs");
app.use("/web", express.static(path.join(__dirname,"/web")));
app.use(express.urlencoded({extended:true}));


app.use(session({
    secret: process.env.SECRETO_SESSION,
    resave:true,
    saveUninitialized:true
}));

//ingregar a al acarpeta usuarios rutas, muestra lo de inicio ejs

app.use("/",usuariosRutas);

var port=process.env.PORT || 3000;

app.listen(port,()=>{

console.log(`servidor en http://localhost:${port}`);

});