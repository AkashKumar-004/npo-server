const mongoose=require('mongoose')
// id: 1,
// name: "Vidya Foundation",
// location: "Chennai, Tamil Nadu",
// description: "Dedicated to providing quality education and scholarships to underprivileged children.",
// donationLink: "#",
// contact: "support@vidyafoundation.org",
// history: "Founded in 2015, Vidya Foundation has supported over 2,000 students in pursuing their education.",
// impact: "80% of our scholarship recipients have successfully completed their higher education.",

const Serviceschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    donationLink:{
        type:String
    },
    contact:{
        type:String,
        required:true
    },
    history:{
        type:String,
        required:true
    },
    impact:{
        type:String,
        required:true
    }
})
const service =mongoose.model("service",Serviceschema)
module.exports=service;