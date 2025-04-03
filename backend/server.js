const express= require("express")
const cors =require("cors")
const dbConnection= require("./config/dbConnection.js")
const UserRouter=require("./routers/UserRouters.js")
const NoteRouter=require("./routers/NoteRouters.js")


const app=express()

const PORT=5500

dbConnection()

app.use(express.json())
app.use(cors({origin:"*"}))

// Routers
app.use("/api",UserRouter)
app.use("/api",NoteRouter)


app.listen(PORT,()=>{
    console.log(`server running successfully ${PORT}`);
})