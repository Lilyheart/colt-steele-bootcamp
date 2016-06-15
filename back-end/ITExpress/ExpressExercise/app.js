// Init express

var express = require("express");
var app = express();

// Routes

app.get("/", function (req, res){
    res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal", function (req, res){
    var animalSounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!!!",
        cat: "murr",
        fish: "...",
    };
    
    if (animalSounds[req.params.animal.toLowerCase()]) {
        res.send("The " + req.params.animal.toLowerCase() + " says " + animalSounds[req.params.animal.toLowerCase()]);
    } else {
        res.send("I don't know what the " + req.params.animal.toLowerCase() + " says.");
    }
    
});

app.get("/repeat/:word/:num", function (req, res){
    var word = req.params.word;
    var num = Number(req.params.num);
    
    var sendString = word;
    
    for (var i = 1; i < num; i++) {sendString += " " + word;}
    res.send(sendString);
});

app.get("*", function (req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});


// Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started: " + process.env.PORT + " " + process.env.IP);
});
