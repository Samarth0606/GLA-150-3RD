const express =  require('express');
const Product = require('../models/product');
const Review = require('../models/review');

const router = express.Router();

router.post('/products/:productId/review' , async(req,res)=>{

        let {productId} = req.params;
        let {rating , comment} = req.body;
        const product = await Product.findById(productId);
        console.log(product);
        // creating a new review
        const review  = new Review({rating , comment}); // let review  = new Review({...req.body}) 
        
        // adding review id to product array
        product.reviews.push(review); //mongodb internally isme se id nikaal kr usse push krdega.
        
        await review.save();
        await product.save();
        res.redirect(`/products/${productId}`)
    
})


module.exports = router;