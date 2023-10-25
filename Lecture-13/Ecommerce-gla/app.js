const express = require('express');
const app = express(); //instance
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require('./routes/productRoutes');

mongoose.connect('mongodb://127.0.0.1:27017/baigan')
.then(()=>{console.log("DB CONNECTED")})
.catch((err)=>{console.log("error while connecting DB" , err)})

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname , 'public')));


// middleware for routers
app.use(productRoutes); //vvvimp

// seedDB()

let PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`server connected at port ${PORT}`)
})