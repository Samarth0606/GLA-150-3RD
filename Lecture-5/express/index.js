const express = require('express') //function
const app = express() //object -> entire instance application


// console.log(app)

app.use((req , res)=>{
    console.log("shadi mei zaroor aana");
    // console.log(req)
    // console.log(res)
    res.send("hi hello")
})



app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})