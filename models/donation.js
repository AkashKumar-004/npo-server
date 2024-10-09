const mongoose=require('mongoose')



const donationschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    upiid:{
        type:String,
        required:true
    }
})

const donation=mongoose.model("donation",donationschema)
module.exports=donation;