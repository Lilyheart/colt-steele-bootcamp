// Setup

var sanitizer      = require("express-sanitizer"),
    methodOverride = require("method-override"),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    express        = require("express"),
    app            = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(sanitizer());

mongoose.connect("mongodb://localhost/restful_blog_app");

var blogSchema = new mongoose.Schema({
    title: String,
    // image: {type: String, default: "....jpg"},
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// ReSTful Routes

    //***************
    //ReSTful Route 1
    // Index Route
    //***************
app.get("/",function(req, res){
    res.redirect("blogs");
});

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, allBlogs){
       if (err) {
           console.log("/blogs get error: " + err);
       } else {
           res.render("index", {blogs: allBlogs});
       }
    });
});

    //***************
    //ReSTful Route 2
    // New Route
    //***************
    
app.get(("/blogs/new"), function(req, res){
    res.render("new");
});

    //***************
    //ReSTful Route 3
    // Create Route
    //***************
    
app.post(("/blogs"), function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err, response){
        if (err) {
            res.render("new");
        } else {
            res.redirect("/blogs");
        }
    });
});

    //***************
    //ReSTful Route 4
    // Show Route
    //***************
    
app.get(("/blogs/:id"), function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if (err) {
            res.redirect("/");
        } else {
            res.render("show", {blog: foundBlog});
        }
    });
});

    //***************
    //ReSTful Route 5
    // Edit Route
    //***************
    
app.get(("/blogs/:id/edit"), function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if (err) {
            res.redirect("/");
        } else {
            res.render("edit", {blog: foundBlog});
        }
    });
});

    //***************
    //ReSTful Route 6
    // Update Route
    //***************
    
app.put(("/blogs/:id"), function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, response){
        if (err) {
            res.render("/");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

    //***************
    //ReSTful Route 7
    // Delete Rout
    //***************
    
app.delete(("/blogs/:id"), function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err, response){
        if (err) {
            res.render("/");
        } else {
            res.redirect("/blogs");
        }
    });
});

// Listener

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Blog app has started: " + process.env.IP + ":" + process.env.PORT);
});