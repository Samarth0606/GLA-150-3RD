const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/relationDB')
.then(()=>{console.log("Db connected")})
.catch((err)=>{console.log(err)})


const userSchema = new mongoose.Schema({
    name:String , 
    age:Number ,
    addresses:[
        {
            _id:{id:false},
            lane: String , 
            city: String , 
            state: String , 
            country : String 
        }
    ]
});

const User = mongoose.model('User' , userSchema );

const makeUser = async()=>{
   const user = new User({
        name:"samarth Vohra" , 
        age:27 
    })
    await user.save();
    console.log("user successfully saved")
    console.log(user);    
}

// makeUser();

const addAdress = async(id)=>{
    const user = await User.findById(id);
    user.addresses.push({
        lane: "G-157" , 
        city: "new delhi" , 
        state: "delhi" , 
        country : 'india' 
    })

    await user.save();
    console.log(user)

}

addAdress('640e330a2e7f40db7d70c77e');
