const mongoose= require("mongoose")

const NoteSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserSchema",
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },

},{timestamps:true})


const Note=mongoose.model("NoteSchema",NoteSchema)
module.exports=Note