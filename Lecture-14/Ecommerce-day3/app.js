const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const methodOverride = require('method-override')

// database connection
mongoose.set('strictQuery' , true); //version 7 ki vajah se
mongoose.connect('mongodb://127.0.0.1:27017/baigan') //returns a promise
.then(()=>{console.log("DB CONNECTED")})
.catch((err)=>{console.log("error in DB" , err)})

//setting templates
// app.engine('ejs' , ejsMate)
app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'));
// setting static files
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true})) //body parsing middleware
app.use(methodOverride('_method'))//method override

// using all the routes in order to verify the path an run the function
app.use(productRoutes);
app.use(reviewRoutes);


// adding dummy data to the collection
// seedDB()


// running on port
const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`server connected at port: ${PORT}`);
})