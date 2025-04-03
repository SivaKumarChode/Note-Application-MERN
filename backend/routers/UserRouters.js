const express= require("express")
const UserControllers=require("../controllers/UserControllers.js")

const router = express.Router()

router.post("/register",UserControllers.register)
router.post("/login",UserControllers.login)

module.exports=router