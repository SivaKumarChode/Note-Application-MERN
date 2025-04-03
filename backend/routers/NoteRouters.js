const express=require("express")
const NoteControllers=require("../controllers/NoteControllers")
const AuthToken =require("../middlewares/VerifyToken.js")

const router=express.Router()

router.post("/create-notes",AuthToken,NoteControllers.createNote)
router.get("/get-notes",AuthToken,NoteControllers.getNotes)
router.put("/update-notes/:id",AuthToken,NoteControllers.updateNote)
router.delete("/delete-notes/:id",AuthToken,NoteControllers.deleteNote)

module.exports=router