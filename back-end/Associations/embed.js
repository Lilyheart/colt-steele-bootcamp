var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");

var postSchema = new mongoose.Schema({
   title: String,
   content: String
});
var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
   email: String,
   name: String,
   posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "hermione@hogwarts.edu",
//     name: "Hermione Granger"
// });

// newUser.posts.push({
//     title: "How to brew a potion",
//     content: "Go to potions class"
// });

// newUser.save(function(err, user){
//   if (err) {
//       console.log(err);
//   } else {
//       console.log(user);
//   }
// });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//   if (err) {
//       console.log(err);
//   } else {
//       console.log(post);
//   }
// });

User.findOne({name: "Hermione Granger"}, function(err, user){
    if (err) {
        // console.log(err);
    } else {
        user.posts.push({
            title: "3 things I really hate",
            content: "Voldemort. Voldemort. Voldemort"
        });
        user.save(function(errSave, userSave){
            if (errSave) {
                console.log(errSave);
            } else {
                console.log(userSave);
            }
        });
  }
});