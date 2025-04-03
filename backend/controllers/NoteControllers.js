
const Note= require("../models/NoteModel.js")

const NoteControllers={
    createNote:async(req,res)=>{
        try {
            const {title , description}= req.body
            const user=req.userId
            console.log("user in createNote ---->",user);
            
            if(!user){
                return res.status(400).json({
                    message:"user is not getting !",
                })
            }
            const newNote=new Note({
                user:user,
                title,
                description,
            })
            await newNote.save()
            res.status(200).json({
                message:"note created successfully",
                newNote
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message:"internal server error",
                error:error.message
            })
        }
    },
    getNotes:async(req,res)=>{
        try {
            const user=req.userId
            if(!user){
                return res.status(400).json({
                    message:"user is not getting !",
                })
            }

            const notes=await Note.find({user}).populate("user","username")
            if(!notes){
                return res.status(400).json({
                    message:"No, notes Found !, please create notes...",
                })
            }
            res.status(200).json({
                message:"notes are ----",
                notes
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message:"internal server error",
                error:error.message
            })
        }
    },
    updateNote:async(req,res)=>{
        try {
            const {title, description}=req.body
            const {id}=req.params
            const update=await Note.findByIdAndUpdate(id,{title,description},{new:true})
            if(!update){
                return res.status(400).json({
                    message:"not updating the note !!",
                })
            }
            res.status(200).json({
                message:"Note updated successfully",
                update
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message:"internal server error",
                error:error.message
            })
        }
    },
    deleteNote:async(req,res)=>{
        try {
            const deleteNote=await Note.findByIdAndDelete(req.params.id)
            if(!deleteNote){
                return res.status(400).json({
                    message:"not deleting the notes"
                })
            }
            res.status(200).json({
                message:"note deleted successfully",
                deleteNote
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message:"internal server error",
                error:error.message
            })
        }
    }

}

module.exports=NoteControllers