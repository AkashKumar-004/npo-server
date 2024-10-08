const express=require('express')
const router=express.Router();
const shelter=require('../models/Shelter')

router.get('/all',async(req,res)=>{
    try{
        const fetchprojects=await shelter.find()
        res.json(fetchprojects).status(200)
    }
    catch(error){
        res.json(error).status(500)
    }
})

router.post('/add',async(req,res)=>{
    try{
        const newprojects=new shelter(req.body)
        const {title,desc}=newprojects
        if(!title||!desc){
            res.status(400)
        }
        const savedata=await newprojects.save()
        res.status(201).json(savedata)
    }
    catch(error)
    {
        console.log(error)
    }
})

module.exports=router;