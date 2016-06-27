// SETUP!
var express                 = require("express"),
    mongoose                = require("mongoose"),
    bodyParser              = require("body-parser"),
    passport                = require("passport"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    User                    = require("./models/user");
var app                     = express();
    
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(require("express-session")({
    secret: "Two people cannot keep a secret",
    resave: false,
    saveUninitialized: false
}));

mongoose.connect("mongodb://localhost/auth_demo_app");

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//============
// ROUTES
//============

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
});

// Auth Routes

    app.get("/register", function(req, res){
       res.render("register");
    });
    
    app.post("/register", function(req, res){
        User.register(new User({username: req.body.username}), req.body.password, function(err, user){
            if (err) {
                console.log(err);
                res.render("register");
            } else {
                passport.authenticate("local")(req, res, function(){
                    res.redirect("/secret");
                });
            }
        });
    });

    // Login/Logout Routes
    
    app.get("/login", function(req, res){
        res.render("login");
    });

    app.post("/login", passport.authenticate("local", {
        successRedirect: "/secret",
        failureRedirect: "/login"
    }), function(req, res){});

    app.get("/logout", function(req, res){
        req.logout();
        res.redirect("/");
    });
    
// Middleware

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        return res.redirect("/login");
    }
}


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started.......");
})