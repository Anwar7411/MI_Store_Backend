const express=require('express');
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const cors = require("cors")

const { connection } = require('mongoose');
const { UserModel } = require('./models/UsersModel.model');


const app=express();
app.use(express.json())
app.use(cors({
    origin: '*'
}))

app.post("/signup",async (req,res)=>{
    const {email,password,name}=req.body;
    const userCheck=await UserModel.findOne({email})
    if(userCheck.length>0){
        res.send("User Already Exists")
    }
    try{
        bcrypt.hash(myPlaintextPassword, saltRounds,async function(err, hash) {
            const userdata=new UserModel({name,email,password:hash});
            await userdata.save();
            res.send("Signup Successfull")
        })
    }
    catch(err){
        res.send("Something went wrong Please try again later!")
    }
})

app.post("/login",async (req,res)=>{

})







app.listen(8080,async ()=>{
    try{
        await connection;
        console.log("Connected to DataBase")
    }
    catch(err){
        console.log("Error in Connecting DB");
        console.log(err)
    }
    console.log("Listening on port 8080")
})