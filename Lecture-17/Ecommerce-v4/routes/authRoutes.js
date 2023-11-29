const express =  require('express');
const User = require('../models/User');


const router = express.Router();

router.get('/register' , (req,res)=>{
    res.render('signup');
})



module.exports = router;