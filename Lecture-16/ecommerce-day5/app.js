const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require("./routes/productRoutes");
const methodOverride  = require('method-override');
const reviewRoutes = require("./routes/review");


mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/baigan')
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})
 

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'views'));
// now for public folder
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

// seeding dummy data
// seedDB();

// Routes
app.use(productRoutes);
app.use(reviewRoutes);

const port = 8080;
app.listen(port,()=>{
    console.log(`server connected at port : ${port} `);
})


