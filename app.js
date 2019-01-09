// 
// Base found on expressjs.com - hello world
//

var express = require("express");

var port = 80;
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
})
/*
app.get("/speak/:animal", function (req, res) {
  res.send("The " + (req.params.animal).toUpperCase()+" says something");
})

app.get("/dog", function (req, res) {
  res.send("Doggies");
})

app.get("/cat", function (req, res) {
  res.send("");
})

app.get("/ejs", function (req, res) {
  res.render("index",{sparta: "THIS IS SPARTA"});
})

app.get("/repeat/:word/:repet", function (req, res) {
  var text = "";
  for(var i =0 ; i<req.params.repet;i++){
    text += (req.params.word).toUpperCase();
    text += "   ";
  }
res.send(text+"   ");
})
*/

app.get("/portfolio", function (req, res) {
  res.render("portfolio");
    
});

app.get("*", function (req, res) {
  res.send("ERROR 404!");
});

app.listen(port, function () {
  console.log("Server working on "+port+"!");
});
