var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");



// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// }, function(err, user){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// Post.create({
//   title: "How to cook the best burger part 3",
//   content: "Gibberish"
// }, function(err, post){
//     if (err) {
//         console.log(err);
//     } else {
//         User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
//             if (err) {
//                 console.log(err);
//             } else {
//                 foundUser.posts.push(post);
//                 foundUser.save(function(err, data){
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log(data);
//                     }
//                 });
//             }
//         });
//     }
// });

User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
    if (err) {
        console.log(err);
    } else {
        // console.log(user);
        console.log(user["posts"][0]["title"]);
    }
});