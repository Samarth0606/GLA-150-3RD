const mongoose = require('mongoose');

// creating product schema
let productSchema = new mongoose.Schema({
    name: {
        type : String,
        trim : true,
        required : true
    },
    img: {
        type : String,
        trim : true
    },
    price: {
        type : Number,
        min : 0,
        required : true
    },
    desc: {
        type : String,
        trim : true
    },
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
});

// creating model
let Product = mongoose.model('Product' , productSchema )

module.exports = Product; //sending the model to be used anywhere when required


