// setup express

var express = require("express");
var app = express();
var request = require("request");

app.use(express.static("public"));
app.set("view engine", "ejs");

// routes

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function (req, res){
    //Get data from form
    var searchTitle = req.query.searchTitle;

    var searchURL = 'http://www.omdbapi.com/?r=json&s=' + searchTitle;
    request(searchURL, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var parsedData = JSON.parse(body);
        res.render("results", parsedData);
      }
    });
    
});

app.post("/", function(req, res){
    var inputFieldName = req.body.inputFieldName;
    res.redirect("/", {inputFieldName: inputFieldName});
});

// Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App has started: " + process.env.PORT + " " + process.env.IP);
});