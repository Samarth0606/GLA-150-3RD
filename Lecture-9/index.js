const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');

let comments = [
    {
        id:uuid(),
        username:"Manoj Tiwari",
        comment:"baby beer peeke nachreli cham cham cham"
    },
    {
        id:uuid(),
        username:"Punnet Superstar",
        comment:"aaj kal ke nalle berozgaar chappri saale khassi colony ke ladhke ladhkiya"
    },
    {
        id:uuid(),
        username:"Ravi kishan",
        comment:"lahega utha de remote se"
    },
    {
        id:uuid(),
        username:"arpit bala",
        comment:"hum pe to hai hi 9 😛"
    }
]

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


app.get('/' , (req,res)=>{
    res.send('<h1>Root route</h1>')
})

// Restful routing

// Read -> displaying all the comments
app.get('/comments' , (req,res)=>{
    res.render('index' , {comments})
})

// displaying form to add new comment
app.get('/comment/new' , (req,res)=>{
    res.render('new');
})

// to actually add the comment
app.post('/comments' , (req,res)=>{
    // console.log(req.body);
    let {username , comment} = req.body;
    comments.push({username , comment, id:uuid()})
    res.redirect('/comments');
})

// showing a particular comment
app.get('/comments/:commentId' , (req,res)=>{
    // console.log(req.params);
    let {commentId} = req.params;
    let foundComment = comments.find((item)=>{return item.id == commentId})
    res.render('show' , {foundComment});
    // res.send('showing particular product');
})

// show the dit form
app.get('/comments/:commentId/edit' , (req,res)=>{
    let {commentId} = req.params;
    let foundComment = comments.find((item)=>{return item.id == commentId})
    res.render('edit' , {foundComment})
})

//to actually edit the comment
app.patch('/comments/:commentId' , (req,res)=>{
    let {commentId} = req.params;
    let foundComment = comments.find((item)=>{return item.id == commentId})
    // console.log(req.body);
    let {comment} = req.body;
    foundComment.comment = comment;
    // res.send('edited successfully');
    res.redirect('/comments');
})

// deleting a comment
app.delete('/comments/:commentId' , (req,res)=>{
    let {commentId} = req.params;
    let newArray = comments.filter((item)=>{return item.id != commentId});
    comments = newArray;
    res.redirect('/comments');
})

app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})





// app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing 