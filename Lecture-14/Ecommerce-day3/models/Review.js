const mongoose = require('mongoose');

// creating product schema
let reviewSchema = new mongoose.Schema({
    rating:{
        type:Number,
        min:0,
        max:5 
    },
    comment:{
        type:String,
        trim:true
    }
    
});

// creating model
let Review = mongoose.model('Review' , reviewSchema )

module.exports = Review; //sending the model to be used anywhere when required


