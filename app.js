var express = require("express");
var moment = require("moment");
var app = express();

app.get("/", function(req,res){ 
	res.send("Hola, bienvenido a heading to codefest");
});
	
app.get("/saludo", function(req,res){ 
	let nombre = req.query.nombre;

	if(nombre){
		res.send("Hola " + nombre +  " Bienvenido al heading codefest");
	}
	else{
		res.send("Hola, bienvenido al heading codefest");
	}
});

app.listen(3000, function(){
	console.log("Taller Nodejs app listening on port 3000!!");
});
