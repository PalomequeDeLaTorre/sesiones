var rutas=require("express").Router();

rutas.get("/", (req,res)=>{
    res.render("Inicio");

});

rutas.get("/login", (req,res)=>{   //POST para recibir datos de un formulario y get 
    res.render("login");

});

rutas.post("/validar", (req,res)=>{
    if(req.body.usuario=="abc" && req.body.password=="123"){
        req.session.usuario=req.body.usuario;
        res.redirect("/bienvenido");
    }

else{
    res.redirect("/error")
}

});

rutas.get("/bienvenido", (req,res)=>{
    if(req.session.usuario){
        res.render("bienvenido", {usuario:req.session.usuario});
    }

    else{
        res.redirect("/error");
    }
    
});

rutas.get("/protegido", (req,res)=>{
    if(req.session.usuario){
        res.render("protegido", {usuario:req.session.usuario});
    }

    else{
        res.redirect("/error");
    }
    
});


rutas.get("/error", (req,res)=>{
    res.render("error");

});

rutas.get("/logout", (req,res)=>{
    req.session.destroy();
    res.redirect("/");

});


module.exports=rutas;