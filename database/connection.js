

const mongoose=require("mongoose")


mongoose.connect("mongodb://localhost:27017/authSystem")
.then(()=>console.log("connection successful.."))
.catch(()=>console.log("connection faild.."))