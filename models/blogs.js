const mongoose=require('mongoose')
// id: 1,
// name: "Vidya Foundation",
// location: "Chennai, Tamil Nadu",
// description: "Dedicated to providing quality education and scholarships to underprivileged children.",
// donationLink: "#",
// contact: "support@vidyafoundation.org",
// history: "Founded in 2015, Vidya Foundation has supported over 2,000 students in pursuing their education.",
// impact: "80% of our scholarship recipients have successfully completed their higher education.",

const blogschema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})
const blogs =mongoose.model("blogs",blogschema)
module.exports=blogs;