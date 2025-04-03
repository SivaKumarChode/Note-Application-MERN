const mongoose= require("mongoose")

const dbConnection =async()=>{
  try {
    const connect=await mongoose.connect("mongodb://localhost:27017/Note-Me")
    console.log(`Database connected successfully ${connect.connection.host} ${connect.connection.name}`);
    
  } catch (error) {
    console.log(error);
  }
}

module.exports=dbConnection