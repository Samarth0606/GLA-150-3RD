const mongoose = require('mongoose');
const Product = require('./models/Product');

let products = [
    {
        name:"Modi ji" ,
        img: "https://static.india.com/wp-content/uploads/2017/05/PM-Modi-coy.jpg",
        price: 1500000 ,
        desc: "bohat badiya gendbaaz"
    },{
        name:"arvind kejriwal" ,
        img: "https://static.toiimg.com/thumb/msid-53080711,imgsize-14364,width-400,resizemode-4/53080711.jpg",
        price: 150,
        desc:"jheelo ka shaher"
    },{
        name:"Rahul Gandhi" ,
        img: "https://i.pinimg.com/736x/e0/3b/c1/e03bc1ebff42904a39537ef71ddc2ffd.jpg",
        price: 10000000,
        desc: "idhar se aalu dalo udhar se sona"
    },{
        name:"Geogia Meloni" ,
        img: "https://sm.mashable.com/t/mashable_in/photo/default/aa-art-cover-new-2023-08-10t133233670-79_w23p.1248.jpg",
        price: 6000,
        desc:"waah modi ji waah"
    },
    {
        name:"Mamta banerjee" ,
        img: "https://pbs.twimg.com/media/D6NPLhLUwAA5P0g.jpg",
        price: 555,
        desc:"bomba bomba lomba lomba humba humba rumba rumba"
    },
    {
        name:"bhupender jogi" ,
        img: "https://i.ytimg.com/vi/2lb7RaXzBJc/hqdefault.jpg?v=6537cd75",
        price: 2000000,
        desc:"us mei bohat jagah gaya hu"
    },
    {
        name:"Arvind Bhaiya" ,
        img: "https://i.ytimg.com/vi/2tWkPzOFLYE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAxl4802Edpw7SVHdD-xM6PuKf8xw",
        price: 25000,
        desc: "ye 5 logo ka data unke papa ke paaas jaarha hai -> somnath , kunal , sachin , hardik , aryan "
    }
]


async function seedDB(){
    await Product.insertMany(products);
    console.log("Data seeded");
}

module.exports = seedDB;