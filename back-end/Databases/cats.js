var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

//Define the database structure
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

    // adding a cat to the DB
    
    // var norr = new Cat({
    //     name: "Mrs. Norris",
    //     age: 7,
    //     temperament: "Evil"
    // });
    
    // norr.save(function(err, item){
    //     if(err){
    //         console.log("Something went wrong!");
    //     } else {
    //         console.log("We just saved to the database");
    //         console.log(item);
    //     }
    // });

Cat.create({
    name: "Momo",
    age: 3,
    temperament: "Cupcake"
}, function(err, res){
    if (err) {
        console.log("ERROR");
        console.log(err);
    } else {
        console.log("OKAY!");
        console.log(res);
        
        Cat.find({}, function(err, cats){
            if (err) {
                console.log("Something went wrong!");
                console.log(err);
            } else {
                console.log("All the cats!");
                console.log(cats);
            }
        });
    }
});

console.log("=========================");
console.log("=========================");
console.log("=========================");


//retrieve all cats from the DB and console.log each one

