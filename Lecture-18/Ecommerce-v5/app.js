const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require("./routes/productRoutes");
const ejsMate = require('ejs-mate');
const methodOverride  = require('method-override');
const reviewRoutes = require("./routes/review");
const session = require('express-session');
const flash = require('connect-flash');
const authRoutes = require("./routes/authRoutes");
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User =  require('./models/User');


mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/baigan') //returns a promise
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})
 

app.engine('ejs' , ejsMate);
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'views'));
// now for public folder
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

// seeding dummy data
// seedDB();

let configSession = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}

app.use(session(configSession));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new LocalStrategy(User.authenticate()));

app.use((req,res,next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})



// Routes
app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);

const port = 8080;
app.listen(port,()=>{
    console.log(`server connected at port : ${port}`);
})


