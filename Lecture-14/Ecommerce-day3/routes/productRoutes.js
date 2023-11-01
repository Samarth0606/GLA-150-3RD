const express = require('express');
const Product = require('../models/Product');
const router = express.Router(); //mini instance/application;


// READ
router.get('/products' , async (req,res)=>{
    let allProducts = await Product.find();
    res.render('product/index' , {allProducts})
})

// SHOW A NEW FORM
router.get('/product/new' , (req,res)=>{
    res.render('product/new');
})

// ACTUALLY ADDING IN THE DATABASE
router.post('/products' , async(req,res)=>{
    let {name,img , price , desc} = req.body;
    await Product.create({name,img , price , desc});
    res.redirect('/products');
})

// TO SHOW A PARTICULAR PRODUCT
router.get('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('product/show' , {foundProduct})

})

// FORM TO EDIT A PARTIICULAR PRODUCT
router.get('/products/:id/edit' , async(req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    console.log('sam1',foundProduct,'sam');
    res.render('product/edit' , {foundProduct})
})


// TO ACTUALLY CHANGE IN db
router.patch('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    let {name , img , price , desc} = req.body;
    await Product.findByIdAndUpdate( id , {name , img , price , desc});
    res.redirect(`/products/${id}`);
})

// DELETE THE EXISTING PRODUCT
router.delete('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})


// export so that you can use it in app.ja
module.exports = router;