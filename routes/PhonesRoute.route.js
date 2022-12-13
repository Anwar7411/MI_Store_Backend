const express=require('express')
const { PhonesModel } = require('../models/PhonesModel.model')


const PhoneRouter=express.Router()

PhoneRouter.get("/",(req,res)=>{
    try{

    }
    catch(err){
        console.log(err)
        res.send("Error in getting data from phones please try again later!")
    }
})

PhoneRouter.post("/addphone",async (req,res)=>{
    const phonedata=req.body;
    try{
        const phoneadddata=await PhonesModel(phonedata);
         await phoneadddata.save();
        res.send("Phones Data Posted Successfully")
    }
    catch(err){
        console.log(err)
        res.send("Error in posting data please try again later!")
    }
})

module.exports={PhoneRouter}