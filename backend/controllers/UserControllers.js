const UserModel= require("../models/UserModel")
const jwt =require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const User = require("../models/UserModel")


const UserControllers={

    register:async(req,res)=>{
        try {
            const {username , email , password }=req.body

            if(!username || !email || !password)
            {
                return res.status(400).json({
                    message:"required all credentials !"
                })
            }

            const existsUser= await User.findOne({email})
            if(existsUser){
                return res.status(400).json({
                    message:"User is already exists !!"
                })
            }

            const hashPassword=await bcrypt.hash(password, 10)

            const newUser=new User({
                username,
                email,
                password:hashPassword,
            })
            await newUser.save()
            res.status(200).json({
                message:"User Register successfully !!",
                newUser
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message:"internal server error",
                error:error.message
            })
        }
    },
    login:async(req,res)=>{
        try {
            const {email ,password}=req.body
            if(!email || !password){
                return res.status(400).json({
                    message:"email and password required !!"
                })
            }
            
            const existsUser=await User.findOne({email})
            if(!existsUser){
                return res.status(400).json({
                    message:"email is required please register  !!"
                })
            }

            const comparePass=await bcrypt.compare(password,existsUser.password)
            if(!comparePass){
                return res.status(400).json({
                    message:"password is required  !!"
                })
            }

            const token =jwt .sign({userId:existsUser._id},"noteApplication",{expiresIn:"30d"})

            res.status(200).json({
                message:"User login successfully",
                existsUser,
                token
            })
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message:"internal server error ",
                error:error.message
            })
        }
    }
}

module.exports=UserControllers