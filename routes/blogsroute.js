const express=require('express')
const router=express.Router();
const blogs=require('../models/blogs')

router.get('/all',async(req,res)=>{
    try{
        const fetchprojects=await blogs.find()
        res.json(fetchprojects).status(200)
    }
    catch(error){
        res.json(error).status(500)
    }
})

router.post('/add',async(req,res)=>{
    try{
        const newprojects=new blogs(req.body)
        const savedata=await newprojects.save()
        res.status(201).json(savedata)
    }
    catch(error)
    {
        console.log(error)
    }
})

module.exports=router;