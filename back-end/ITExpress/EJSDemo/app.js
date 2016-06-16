// setup express

var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// routes

app.get("/", function (req, res){
    console.log("Someone accessed /");
    res.render("home");
});

app.get("/fallinlovewith/:name", function (req, res){
    console.log("Someone accessed /fallinlovewith");
    var name = req.params.name;
    res.render("love", {nameVar: name});
});

app.get("/posts", function (req, res){
    console.log("Someone accessed /posts");
    var posts = [
        {title: "Post 1", author: "Tom"},
        {title: "Bunnies!", author: "Dick"},
        {title: "Pomsky's are cute", author: "Harry"}
    ];
    
    res.render("posts", {posts: posts});
});


// Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started: " + process.env.PORT + " " + process.env.IP);
});