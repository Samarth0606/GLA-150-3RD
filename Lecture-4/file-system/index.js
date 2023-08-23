let fs = require('fs');

let data = "hi we are coders";

// fs.writeFile('abc.txt' , data , {
//     encoding:'utf-8',
//     flag: 'w'
// } , (err)=>{

//     if(err){throw err}
//     console.log("file written successfully")
// } )


// fs.writeFile('def.txt' , data , {} , (err)=>{

//     if(err){throw err}
//     console.log("file written successfully")
// } )

// fs.readFile('abc.txt' , {
//     // encoding: 'utf-8',
//     // flag: 'r'

// } , 
// (err , data)=>{
//     if(err){throw err}
//     console.log(data.toString());
// })


// fs.appendFile('abc.txt' , ' file system ka bhaukaal' , {} ,
//  (err)=>{
//     if(err){throw err}
//     console.log("file updated successfully")
// })


fs.unlink('abc.txt' , (err)=>{
    if(err){throw err}
    console.log("file deleted successfully")
})