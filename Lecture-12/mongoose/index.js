const express = require('express');//func
const app = express();//obj
const mongoose = require('mongoose');//obj

// connect -> returns me a promise
mongoose.connect('mongodb://127.0.0.1:27017/cheerz')//change db naam
.then(()=>{console.log("DB CONNECTED")}) //resolve
.catch((err)=>{console.log("CONNECTION EROOR" , err)}) //reject

// creating schema
let movieSchema = new mongoose.Schema({
    name: String, 
    year: Number,
    imdb: Number,
    isWatched: Boolean
})

//creating a model
let Movie = mongoose.model('Movie' , movieSchema);

let shaktiman = new Movie({name:"shaktiman" , year:2010 , imdb:8 , isWatched:false})
// console.log(shaktiman);
// shaktiman.save()
// .then(()=>{console.log("movie saved successfuly")})
// .catch((e)=>{console.log("error while saving movie") , e})

app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})